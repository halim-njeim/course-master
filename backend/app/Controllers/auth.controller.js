import { PrismaClient } from "../generated/prisma/client.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../Models/User.js";
import { errorResponse, successResponse } from "../Traits/response.traits.js";

const prisma = new PrismaClient();

class AuthController {
  //this can be moved to traits
  static hashPassword = async (password) => {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  };

  //this can also be moved to traits
  static verifyPassword = (password, hash) => {
    return bcrypt.compare(password, hash);
  };

  static register = async (req, res) => {
    try {
      const { fullname, email, password } = req.body;

      const existingUser = await User.findFirst({
        where: { email, deleted: false },
      });

      if (existingUser) {
        return errorResponse(res, "Email is already taken", 400);
      }

      //will be modified.
      const hashedPassword = await this.hashPassword(password);

      const user = await User.create({
        data: {
          fullname,
          email,
          password: hashedPassword,
        },
      });

      const token = jwt.sign(
        { id: user.id.toString(), email: user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );

      const userData = {
        ...user,
        id: user.id.toString(), //Casting to String because JS cannot read bigInt.
      };

      return successResponse(
        res,
        {
          message: "User registered successfully",
          userData,
          token,
        },
        201
      );
    } catch (error) {
      console.error("Registration error:", error);
      return errorResponse(res, "Failed to register user", 500);
    }
  };

  static login = async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findFirst({ where: { email, deleted: false } });

      if (!user) {
        return errorResponse(res, "Invalid credentials", 401);
      }

      const passwordValid = await this.verifyPassword(password, user.password);

      if (!passwordValid) {
        return errorResponse(res, "Invalid credentials", 401);
      }

      const token = jwt.sign(
        { id: user.id.toString(), email: user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );

      const userData = {
        ...user,
        id: user.id.toString(), // Casting to String because JS cannot read bigInt
      };

      return successResponse(res, {
        message: "Login successful",
        userData,
        token,
      });
    } catch (error) {
      console.error("Login error:", error);
      return errorResponse(res, "Failed to login", 500);
    }
  };
}

export default AuthController;

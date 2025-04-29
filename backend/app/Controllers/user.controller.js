import { PrismaClient } from "../generated/prisma/client.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../Models/User.js";
import { errorResponse, successResponse } from "../Traits/response.traits.js";

const prisma = new PrismaClient();

class UserController {
  static hashPassword = async (password) => {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  };

  verifyPassword = (password, hash) => {
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
        "secret",
        {
          expiresIn: "7d",
        }
      );

      const userData = {
        ...user,
        id: user.id.toString(),
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
}

export default UserController;

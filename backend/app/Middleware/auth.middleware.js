import jwt from "jsonwebtoken";
import { errorResponse } from "../Traits/response.traits.js";
import User from "../Models/User.js";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return errorResponse(res, "No token Provided", 401);
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return errorResponse(res, "No token Provided", 401);
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findFirst({
        where: {
          id: BigInt(decoded.id),
          deleted: false,
        },
      });

      if (!user) {
        return errorResponse(res, "User not Found", 404);
      }

      req.user = {
        ...user,
        id: user.id.toString(),
      };

      next();
    } catch (error) {
      return errorResponse(res, "Invalid token", 401);
    }
  } catch (error) {
    console.error("Auth middleware error: ", error);
    return errorResponse(res, "Authentication Failed", error);
  }
};

export default authMiddleware;

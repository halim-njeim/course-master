import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

const User = prisma.user;

User.modelName = "User";
User.tableName = "users";

User.hiddenFields = ["password"];

// User.sanitize = (user) => {
//   if (!user) return null;
//   const sanitized = { ...user };
//   User.hiddenFields.forEach((field) => delete sanitized[field]);
//   return sanitized;
// };

export default User;

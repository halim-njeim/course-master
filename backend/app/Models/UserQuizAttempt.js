import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

const UserQuizAttempt = prisma.userQuizAttempt;

UserQuizAttempt.modelName = "UserQuizAttempt";
UserQuizAttempt.tableName = "user_quiz_attempts";

UserQuizAttempt.formatForResponse = (attempt) => {
  if (!attempt) return null;

  return {
    ...attempt,
    id: attempt.id.toString(),
    user_id: attempt.user_id.toString(),
    quiz_id: attempt.quiz_id.toString(),
  };
};

export default UserQuizAttempt;

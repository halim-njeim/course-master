import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

const Quiz = prisma.quiz;

Quiz.modelName = "Quiz";
Quiz.tableName = "quizzes";

Quiz.formatForResponse = (quiz) => {
  if (!quiz) return null;

  return {
    ...quiz,
    id: quiz.id.toString(),
    chapter_id: quiz.chapter_id.toString(),
    passing_score: quiz.passing_score.toString(),
    time_limit_secs: quiz.time_limit_secs.toString(),
  };
};

export default Quiz;

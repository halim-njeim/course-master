import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

const Question = prisma.question;

Question.modelName = "Question";
Question.tableName = "questions";

Question.formatForResponse = (question) => {
  if (!question) return null;

  return {
    ...question,
    id: question.id.toString(),
    quiz_id: question.quiz_id.toString(),
    points: question.points.toString(),
    question_number: question.question_number.toString(),
  };
};

export default Question;

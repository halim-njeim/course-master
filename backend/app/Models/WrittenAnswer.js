import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

const WrittenAnswer = prisma.writtenAnswer;

WrittenAnswer.modelName = "WrittenAnswer";
WrittenAnswer.tableName = "written_answers";

WrittenAnswer.formatForResponse = (answer) => {
  if (!answer) return null;

  return {
    ...answer,
    id: answer.id.toString(),
    question_id: answer.question_id.toString(),
  };
};

export default WrittenAnswer;

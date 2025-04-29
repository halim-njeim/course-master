import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

const Option = prisma.option;

Option.modelName = "Option";
Option.tableName = "options";

Option.formatForResponse = (option) => {
  if (!option) return null;

  return {
    ...option,
    id: option.id.toString(),
    question_id: option.question_id.toString(),
    options_number: option.options_number.toString(),
  };
};

export default Option;

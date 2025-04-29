import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

const Chapter = prisma.chapter;

Chapter.modelName = "Chapter";
Chapter.tableName = "chapters";

Chapter.formatForResponse = (chapter) => {
  if (!chapter) return null;

  return {
    ...chapter,
    id: chapter.id.toString(),
    course_id: chapter.course_id.toString(),
    chapter_number: chapter.chapter_number.toString(),
  };
};

export default Chapter;

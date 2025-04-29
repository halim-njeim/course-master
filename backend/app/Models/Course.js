import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

const Course = prisma.course;

Course.modelName = "Course";
Course.tableName = "courses";

Course.formatForResponse = (course) => {
  if (!course) return null;

  return {
    ...course,
    id: course.id.toString(),
    user_id: course.user_id.toString(),
  };
};

export default Course;

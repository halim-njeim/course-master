import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

const UserCourseProgress = prisma.userCourseProgress;

UserCourseProgress.modelName = "UserCourseProgress";
UserCourseProgress.tableName = "user_course_progress";

UserCourseProgress.formatForResponse = (progress) => {
  if (!progress) return null;

  const formatted = {
    ...progress,
    id: progress.id.toString(),
    user_id: progress.user_id.toString(),
    course_id: progress.course_id.toString(),
  };

  if (progress.current_chapter_id) {
    formatted.current_chapter_id = progress.current_chapter_id.toString();
  }

  return formatted;
};

export default UserCourseProgress;

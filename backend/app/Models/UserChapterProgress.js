import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

const UserChapterProgress = prisma.userChapterProgress;

UserChapterProgress.modelName = "UserChapterProgress";
UserChapterProgress.tableName = "user_chapter_progress";

UserChapterProgress.formatForResponse = (progress) => {
  if (!progress) return null;

  return {
    ...progress,
    id: progress.id.toString(),
    user_id: progress.user_id.toString(),
    chapter_id: progress.chapter_id.toString(),
    completion_percentage: progress.completion_percentage.toString(),
  };
};

export default UserChapterProgress;

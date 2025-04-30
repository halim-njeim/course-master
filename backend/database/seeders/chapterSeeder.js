import { PrismaClient } from "../../app/generated/prisma/client.js";
import Chapter from "../../app/Models/Chapter.js";
import ChapterFactory from "../factories/ChapterFactory.js";

const prisma = new PrismaClient();

export const seedChapters = async (courses, chaptersPerCourse = 3) => {
  console.log(`Seeding chapters for ${courses.length} courses...`);
  const allChapters = [];

  try {
    for (const course of courses) {
      const chapters = ChapterFactory.makeMany(
        chaptersPerCourse,
        course.id,
        (index) => {
          return {
            chapter_number: index + 1,
          };
        }
      );

      const createdChapters = await prisma.$transaction(
        chapters.map((chapterData) => Chapter.create({ data: chapterData }))
      );

      allChapters.push(...createdChapters);
      console.log(
        `Created ${createdChapters.length} chapters for course ${course.id}`
      );
    }

    console.log(`Successfully seeded ${allChapters.length} chapters`);
    return allChapters;
  } catch (error) {
    console.error("Error seeding chapters: ", error);
    throw error;
  }
};

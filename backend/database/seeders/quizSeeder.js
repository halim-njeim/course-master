import { PrismaClient } from "../../app/generated/prisma/client.js";
import QuizFactory from "../factories/QuizFactory.js";
import Quiz from "../../app/Models/Quiz.js";

const prisma = new PrismaClient();

export const seedQuizzes = async (chapters, quizzesPerChapter = 1) => {
  console.log(`Seeding quizzes for ${chapters.length} chapters...`);
  const allQuizzes = [];

  try {
    for (const chapter of chapters) {
      const quizzes = QuizFactory.makeMany(quizzesPerChapter, chapter.id);

      const createdQuizzes = await prisma.$transaction(
        quizzes.map((quizData) => Quiz.create({ data: quizData }))
      );

      allQuizzes.push(...createdQuizzes);
      console.log(
        `Created ${createdQuizzes.length} quizzes for chapter ${chapter.id}`
      );
    }

    console.log(`Successfully seeded ${allQuizzes.length} quizzes`);
    return allQuizzes;
  } catch (error) {
    console.error("Error seeding quizzes: ", error);
    throw error;
  }
};

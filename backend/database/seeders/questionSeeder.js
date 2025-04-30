import { PrismaClient } from "../../app/generated/prisma/client.js";
import QuestionFactory from "../factories/QuestionFactory.js";
import Question from "../../app/Models/Question.js";

const prisma = new PrismaClient();

export const seedQuestions = async (quizzes, questionsPerQuiz = 5) => {
  console.log(`Seeding questions for ${quizzes.length} quizzes...`);
  const allQuestions = [];

  try {
    for (const quiz of quizzes) {
      const questions = [];

      for (let i = 0; i < questionsPerQuiz; i++) {
        let questionType;
        const typeRandom = Math.random();

        if (typeRandom < 0.4) {
          questionType = "MULTIPLE_CHOICE";
        } else if (typeRandom < 0.7) {
          questionType = "SINGLE_CHOICE";
        } else if (typeRandom < 0.9) {
          questionType = "TRUE_FALSE";
        } else {
          questionType = "WRITTEN";
        }

        questions.push(
          QuestionFactory.make({
            quiz_id: quiz.id,
            question_type: questionType,
            question_number: i + 1,
          })
        );
      }

      const createdQuestions = await prisma.$transaction(
        questions.map((questionData) => Question.create({ data: questionData }))
      );

      allQuestions.push(...createdQuestions);
      console.log(
        `Created ${createdQuestions.length} questions for quiz ${quiz.id}`
      );
    }

    console.log(`Successfully seeded ${allQuestions.length} questions`);
    return allQuestions;
  } catch (error) {
    console.error("Error seeding questions: ", error);
    throw error;
  }
};

import { PrismaClient } from "../../app/generated/prisma/client.js";
import WrittenAnswer from "../../app/Models/WrittenAnswer.js";
import WrittenAnswerFactory from "../factories/WrittenAnswerFactory.js";

const prisma = new PrismaClient();

export const seedWrittenAnswers = async (questions) => {
  const writtenQuestions = questions.filter(
    (q) => q.question_type === "WRITTEN"
  );

  if (writtenQuestions.length === 0) {
    console.log(
      "No WRITTEN type questions found. Skipping written answers seeding."
    );
    return [];
  }

  console.log(
    `Seeding written answers for ${writtenQuestions.length} questions...`
  );
  const allWrittenAnswers = [];

  try {
    for (const question of writtenQuestions) {
      const answerCount = Math.floor(Math.random() * 3) + 2;

      const writtenAnswers = WrittenAnswerFactory.makeMany(
        answerCount,
        question.id
      );

      const createdWrittenAnswers = await prisma.$transaction(
        writtenAnswers.map((answerData) =>
          WrittenAnswer.create({ data: answerData })
        )
      );

      allWrittenAnswers.push(...createdWrittenAnswers);
      console.log(
        `Created ${createdWrittenAnswers.length} written answers for question ${question.id}`
      );
    }

    console.log(
      `Successfully seeded ${allWrittenAnswers.length} written answers`
    );
    return allWrittenAnswers;
  } catch (error) {
    console.error("Error seeding written answers: ", error);
    throw error;
  }
};

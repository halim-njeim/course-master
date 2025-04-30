import { PrismaClient } from "../../app/generated/prisma/client.js";
import OptionFactory from "../factories/OptionFactory.js";
import Option from "../../app/Models/Option.js";

const prisma = new PrismaClient();

export const seedOptions = async (questions) => {
  console.log(`Seeding options for ${questions.length} questions...`);
  const allOptions = [];

  try {
    for (const question of questions) {
      if (question.question_type === "WRITTEN") {
        continue;
      }

      let optionCount;

      switch (question.question_type) {
        case "TRUE_FALSE":
          optionCount = 2;
          break;
        case "SINGLE_CHOICE":
          optionCount = Math.floor(Math.random() * 2) + 3;
          break;
        case "MULTIPLE_CHOICE":
          optionCount = Math.floor(Math.random() * 3) + 4;
          break;
        default:
          optionCount = 4;
      }

      let options;

      if (question.question_type === "TRUE_FALSE") {
        const isTrue = Math.random() < 0.5;
        options = [
          OptionFactory.make({
            question_id: question.id,
            option_text: "True",
            options_number: 1,
            is_correct: isTrue,
          }),
          OptionFactory.make({
            question_id: question.id,
            option_text: "False",
            options_number: 2,
            is_correct: !isTrue,
          }),
        ];
      } else if (question.question_type === "MULTIPLE_CHOICE") {
        options = [];

        const correctCount = Math.floor(Math.random() * 3) + 1;
        const correctIndices = new Set();

        while (correctIndices.size < correctCount) {
          correctIndices.add(Math.floor(Math.random() * optionCount));
        }

        for (let i = 0; i < optionCount; i++) {
          options.push(
            OptionFactory.make({
              question_id: question.id,
              options_number: i + 1,
              is_correct: correctIndices.has(i),
            })
          );
        }
      } else {
        options = OptionFactory.makeMany(optionCount, question.id);
      }

      const createdOptions = await prisma.$transaction(
        options.map((optionData) => Option.create({ data: optionData }))
      );

      allOptions.push(...createdOptions);
      console.log(
        `Created ${createdOptions.length} options for question ${question.id}`
      );
    }

    console.log(`Successfully seeded ${allOptions.length} options`);
    return allOptions;
  } catch (error) {
    console.error("Error seeding options: ", error);
    throw error;
  }
};

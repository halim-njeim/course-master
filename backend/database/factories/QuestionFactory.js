import { faker } from "@faker-js/faker";

class QuestionFactory {
  static make = (overrides = {}, quizId = null) => {
    if (!quizId && !overrides.quiz_id) {
      throw new Error(
        "QuestionFactory.make requires a quizId parameter or quiz_id in overrides"
      );
    }

    const questionType = overrides.question_type || this.generateQuestionType();

    const questionData = {
      quiz_id: overrides.quiz_id || quizId,
      question_text:
        overrides.question_text || this.generateQuestionText(questionType),
      question_type: questionType,
      points: overrides.points || faker.number.int({ min: 1, max: 10 }),
      question_number:
        overrides.question_number || faker.number.int({ min: 1, max: 20 }),
      ...overrides,
    };

    delete questionData.id;

    return questionData;
  };

  static makeMany = (count = 1, quizId = null, overrides = {}) => {
    const questions = [];

    for (let i = 0; i < count; i++) {
      const questionOverrides =
        typeof overrides === "function" ? overrides(i) : overrides;

      if (!questionOverrides.question_number) {
        questionOverrides.question_number = i + 1;
      }

      questions.push(this.make(questionOverrides, quizId));
    }

    return questions;
  };

  static generateQuestionType = () => {
    const types = ["MULTIPLE_CHOICE", "SINGLE_CHOICE", "TRUE_FALSE", "WRITTEN"];
    return faker.helpers.arrayElement(types);
  };

  static generateQuestionText = (questionType) => {
    const commonPrefixes = [
      "Explain why",
      "What is the main reason",
      "Which of the following",
      "How would you best describe",
      "What is the primary purpose of",
      "Identify the correct statement about",
      "According to the lecture,",
      "In your own words, describe",
      "Select all that apply regarding",
    ];

    const trueFalsePrefixes = [
      "True or False:",
      "Is it correct to say that",
      "Determine whether the following statement is true or false:",
      "Evaluate the accuracy of this statement:",
    ];

    if (questionType === "TRUE_FALSE") {
      const prefix = faker.helpers.arrayElement(trueFalsePrefixes);
      return `${prefix} ${faker.lorem.sentence()}`;
    } else {
      const prefix = faker.helpers.arrayElement(commonPrefixes);
      return `${prefix} ${faker.lorem.sentence()}`;
    }
  };
}

export default QuestionFactory;

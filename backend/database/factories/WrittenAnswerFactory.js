import { faker } from "@faker-js/faker";

class WrittenAnswerFactory {
  static make = (overrides = {}, questionId = null) => {
    if (!questionId && !overrides.question_id) {
      throw new Error(
        "WrittenAnswerFactory.make requires a questionId parameter or question_id in overrides"
      );
    }

    const writtenAnswerData = {
      question_id: overrides.question_id || questionId,
      answer: overrides.answer || this.generateAnswerText(),
      match_percentage:
        overrides.match_percentage || this.generateMatchPercentage(),
      ...overrides,
    };

    delete writtenAnswerData.id;

    return writtenAnswerData;
  };

  static makeMany = (count = 3, questionId = null, overrides = {}) => {
    const writtenAnswers = [];

    for (let i = 0; i < count; i++) {
      const answerOverrides =
        typeof overrides === "function" ? overrides(i) : { ...overrides };

      writtenAnswers.push(this.make(answerOverrides, questionId));
    }

    return writtenAnswers;
  };

  static generateAnswerText = () => {
    return faker.lorem.paragraph(2);
  };

  static generateMatchPercentage = () => {
    return Math.random() * 30 + 70;
  };
}

export default WrittenAnswerFactory;

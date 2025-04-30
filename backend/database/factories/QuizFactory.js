import { faker } from "@faker-js/faker";

class QuizFactory {
  static make = (overrides = {}, chapterId = null) => {
    if (!chapterId && !overrides.chapter_id) {
      throw new Error(
        "QuizFactory.make requires a chapterId parameter or chapter_id in overrides"
      );
    }

    const quizData = {
      chapter_id: overrides.chapter_id || chapterId,
      passing_score: overrides.passing_score || this.generatePassingScore(),
      time_limit_secs: overrides.time_limit_secs || this.generateTimeLimit(),
      ...overrides,
    };

    delete quizData.id;

    return quizData;
  };

  static makeMany = (count = 1, chapterId = null, overrides = {}) => {
    const quizzes = [];

    for (let i = 0; i < count; i++) {
      const quizOverrides =
        typeof overrides === "function" ? overrides(i) : overrides;

      quizzes.push(this.make(quizOverrides, chapterId));
    }

    return quizzes;
  };

  static generatePassingScore = () => {
    return faker.number.int({ min: 60, max: 80 });
  };

  static generateTimeLimit = () => {
    const minutesOptions = [5, 10, 15, 20, 25, 30];
    const minutes = faker.helpers.arrayElement(minutesOptions);
    return minutes * 60;
  };
}

export default QuizFactory;

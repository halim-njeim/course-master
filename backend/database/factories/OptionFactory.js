import { faker } from "@faker-js/faker";

class OptionFactory {
  static make = (overrides = {}, questionId = null) => {
    if (!questionId && !overrides.question_id) {
      throw new Error(
        "OptionFactory.make requires a questionId parameter or question_id in overrides"
      );
    }

    const optionData = {
      question_id: overrides.question_id || questionId,
      option_text: overrides.option_text || this.generateOptionText(),
      options_number:
        overrides.options_number || faker.number.int({ min: 1, max: 5 }),
      is_correct: overrides.hasOwnProperty("is_correct")
        ? overrides.is_correct
        : false,
      ...overrides,
    };

    delete optionData.id;

    return optionData;
  };

  static makeMany = (count = 4, questionId = null, overrides = {}) => {
    const options = [];

    let hasCorrectOption = false;

    for (let i = 0; i < count; i++) {
      const optionOverrides =
        typeof overrides === "function" ? overrides(i) : { ...overrides };

      if (!optionOverrides.options_number) {
        optionOverrides.options_number = i + 1;
      }

      if (
        i === count - 1 &&
        !hasCorrectOption &&
        !optionOverrides.hasOwnProperty("is_correct")
      ) {
        optionOverrides.is_correct = true;
      } else if (i === 0 && !optionOverrides.hasOwnProperty("is_correct")) {
        optionOverrides.is_correct = true;
        hasCorrectOption = true;
      }

      if (optionOverrides.is_correct) {
        hasCorrectOption = true;
      }

      options.push(this.make(optionOverrides, questionId));
    }

    return options;
  };

  static generateOptionText = () => {
    return faker.lorem.sentence();
  };
}

export default OptionFactory;

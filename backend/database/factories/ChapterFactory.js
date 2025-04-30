import { faker } from "@faker-js/faker";

class ChapterFactory {
  static make = (overrides = {}, courseId = null) => {
    if (!courseId && !overrides.course_id) {
      throw new Error(
        "ChapterFactory.make requires a courseId parameter or course_id in overrides"
      );
    }

    const chapterData = {
      course_id: overrides.course_id || courseId,
      title: overrides.title || this.generateChapterTitle(),
      description: overrides.description || this.generateChapterDescription(),
      chapter_number:
        overrides.chapter_number || faker.number.int({ min: 1, max: 20 }),
      ...overrides,
    };

    delete chapterData.id;

    return chapterData;
  };

  static makeMany = (count = 1, courseId = null, overrides = {}) => {
    const chapters = [];

    for (let i = 0; i < count; i++) {
      const chapterOverrides =
        typeof overrides === "function" ? overrides(i) : overrides;

      if (!chapterOverrides.chapter_number) {
        chapterOverrides.chapter_number = i + 1;
      }

      chapters.push(this.make(chapterOverrides, courseId));
    }

    return chapters;
  };

  static generateChapterTitle = () => {
    const prefixes = [
      "Introduction to",
      "Understanding",
      "Working with",
      "Mastering",
      "Exploring",
      "Deep Dive into",
      "Practical",
      "Essential",
      "Advanced",
      "Fundamentals of",
    ];

    const topics = [
      "Core Concepts",
      "Basic Principles",
      "Implementation Details",
      "Real-world Applications",
      "Best Practices",
      "Common Patterns",
      "Problem Solving",
      "Architecture",
      "Performance Optimization",
      "Integration",
      "Deployment",
      "Testing",
      "Debugging",
      "Security",
    ];

    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const topic = topics[Math.floor(Math.random() * topics.length)];

    return `${prefix} ${topic}`;
  };

  static generateChapterDescription = () => {
    return faker.lorem.paragraph();
  };
}

export default ChapterFactory;

import { faker } from "@faker-js/faker";

class CourseFactory {
  static make = (overrides = {}, userId = null) => {
    if (!userId && !overrides.user_id) {
      throw new Error(
        "CourseFactory.make requires a userId parameter or user_id in overrides"
      );
    }

    const courseData = {
      user_id: overrides.user_id || userId,
      title: overrides.title || this.generateCourseTitle(),
      youtube_url: overrides.youtube_url || this.generateYoutubeUrl(),
      completed_at:
        overrides.completed_at ||
        (Math.random() > 0.7 ? faker.date.recent() : null),
      ...overrides,
    };

    delete courseData.id;

    return courseData;
  };

  static makeMany = (count = 1, userId = null, overrides = {}) => {
    const courses = [];

    for (let i = 0; i < count; i++) {
      const courseOverrides =
        typeof overrides === "function" ? overrides(i) : overrides;

      courses.push(this.make(courseOverrides, userId));
    }

    return courses;
  };

  static generateCourseTitle = () => {
    const subjects = [
      "Introduction to",
      "Advanced",
      "Mastering",
      "Complete Guide to",
      "Fundamentals of",
      "Practical",
      "Comprehensive",
      "Essential",
      "Professional",
      "Modern",
      "Ultimate",
    ];

    const topics = [
      "JavaScript",
      "Python",
      "Web Development",
      "Data Science",
      "Machine Learning",
      "Mobile App Development",
      "UI/UX Design",
      "DevOps",
      "Cloud Computing",
      "Software Engineering",
      "Cybersecurity",
      "Database Management",
      "React",
      "Node.js",
      "Full-Stack Development",
      "Artificial Intelligence",
      "Game Development",
      "Blockchain",
      "IoT",
    ];

    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const topic = topics[Math.floor(Math.random() * topics.length)];

    return `${subject} ${topic}`;
  };

  static generateYoutubeUrl = () => {
    const videoId = faker.string.alphanumeric(11);
    return `https://www.youtube.com/watch?v=${videoId}`;
  };
}

export default CourseFactory;

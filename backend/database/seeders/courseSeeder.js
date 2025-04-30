import { PrismaClient } from "../../app/generated/prisma/client.js";
import Course from "../../app/Models/Course.js";
import CourseFactory from "../factories/CourseFactory.js";

const prisma = new PrismaClient();

export const seedCourses = async (users, options = {}) => {
  const defaultOptions = {
    coursesPerUser: 1,
    minCourses: 10,
  };

  const config = { ...defaultOptions, ...options };
  const totalUsers = users.length;

  const coursesPerUser = Math.max(
    config.coursesPerUser,
    Math.ceil(config.minCourses / totalUsers)
  );

  console.log(
    `Seeding ~${coursesPerUser} courses per user (${totalUsers} users)...`
  );

  try {
    const coursePromises = [];

    for (const user of users) {
      const userCourses = CourseFactory.makeMany(coursesPerUser, user.id);

      for (const courseData of userCourses) {
        coursePromises.push(Course.create({ data: courseData }));
      }
    }

    const batchSize = 50;
    const courses = [];

    for (let i = 0; i < coursePromises.length; i += batchSize) {
      const batch = coursePromises.slice(i, i + batchSize);
      const batchResults = await Promise.all(batch);
      courses.push(...batchResults);

      console.log(
        `Created courses batch ${Math.ceil((i + 1) / batchSize)} of ${Math.ceil(
          coursePromises.length / batchSize
        )}`
      );
    }

    console.log("Courses successfully seeded.");
    return courses;
  } catch (error) {
    console.error("Error seeding courses: ", error);
    throw error;
  }
};

export const truncateCourses = async () => {
  try {
    console.log("Deleting courses...");

    await Course.deleteMany({});
  } catch (error) {
    console.error("Error deleting courses: ", error);
    throw error;
  }
};

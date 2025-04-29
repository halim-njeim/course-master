import { PrismaClient } from "../../app/generated/prisma/client.js";
import UserFactory from "../factories/UserFactory.js";
import User from "../../app/Models/User.js";

const prisma = new PrismaClient();

export const seedUsers = async (count = 10) => {
  console.log(`Seeding ${count} users...`);

  try {
    const adminUser = await UserFactory.make({
      fullname: "Admin User",
      email: "admin@example.com",
      password: "admin123",
    });

    const regularUsers = await UserFactory.makeMany(count - 1, (index) => {
      return {
        email: `user${index}@gmail.com`,
      };
    });

    const allUsers = [adminUser, ...regularUsers];

    //prisma.$transaction allows to bundle up the user creation, if one fails, they all do.
    const createdUsers = await prisma.$transaction(
      allUsers.map((userData) => User.create({ data: userData }))
    );

    console.log(`Successfully seeded ${createdUsers.length} users`);
    return createdUsers;
  } catch (error) {
    console.error("Error seeding: ", error);
    throw error;
  }
};

export const truncateUsers = async () => {
  try {
    console.log("Deleting users...");

    await User.deleteMany({});

    console.log("Users table truncated");
  } catch (error) {
    console.log("Error truncating: ", error);
    throw error;
  }
};

import { PrismaClient } from "../app/generated/prisma/client.js";
import { seedUsers, truncateUsers } from "./seeders/userSeeder.js";
import {
  seedResourceTypes,
  truncateResourceTypes,
} from "./seeders/resourceTypeSeeder.js";

const prisma = new PrismaClient();

const main = async () => {
  console.log("Seeding Database....");

  try {
    const users = await seedUsers(10);
    const resourceTypes = await seedResourceTypes();

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Seeding failed: ", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

main()
  .then(() => {
    console.log("Seeding Complete");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Unexpected error: ", error);
    process.exit(1);
  });

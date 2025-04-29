import { PrismaClient } from "../app/generated/prisma/client.js";
import { seedUsers, truncateUsers } from "./seeders/userSeeder.js";

const prisma = new PrismaClient();

const main = async () => {
  console.log("Unseeding...");

  try {
    const deletedUsers = await truncateUsers();

    console.log("Records removed with success.");
  } catch (error) {
    console.error("Something went wrong: ", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

main()
  .then(() => {
    console.log("Records removed successfully");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Something went wrong in the deletion process");
    process.exit(1);
  });

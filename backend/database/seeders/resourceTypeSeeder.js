import { PrismaClient } from "../../app/generated/prisma/client.js";
import ResourceType from "../../app/Models/ResourceType.js";

const prisma = new PrismaClient();

export const seedResourceTypes = async () => {
  const resourceTypesExtensions = ["pdf", "csv", "txt", "jpeg", "png", "jpg"];

  try {
    const createdTypes = await prisma.$transaction(
      resourceTypesExtensions.map((extensionName) =>
        ResourceType.create({ data: { extension: extensionName } })
      )
    );

    console.log(`Successfully seeded ${createdTypes.length} types`);
    return createdTypes;
  } catch (error) {
    console.error("Error seeding resource types: ", error);
    throw error;
  }
};

export const truncateResourceTypes = async () => {
  try {
    console.log("Deleting resource types...");

    await ResourceType.deleteMany();

    console.log("Resource Types removed.");
  } catch (error) {
    console.error("Something went wrong:", error);
    throw error;
  }
};

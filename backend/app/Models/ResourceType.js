import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

const ResourceType = prisma.resourceType;

ResourceType.modelName = "ResourceType";
ResourceType.tableName = "resource_types";

ResourceType.formatForResponse = (resourceType) => {
  if (!resourceType) return null;

  return {
    ...resourceType,
    id: resourceType.id.toString(),
  };
};

export default ResourceType;

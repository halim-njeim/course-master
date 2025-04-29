import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

const CourseResource = prisma.courseResource;

CourseResource.modelName = "CourseResource";
CourseResource.tableName = "course_resources";

CourseResource.formatForResponse = (resource) => {
  if (!resource) return null;

  return {
    ...resource,
    id: resource.id.toString(),
    course_id: resource.course_id.toString(),
    user_id: resource.user_id.toString(),
    resource_type_id: resource.resource_type_id.toString(),
  };
};

export default CourseResource;

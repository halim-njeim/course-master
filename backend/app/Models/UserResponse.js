import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

const UserResponse = prisma.userResponse;

UserResponse.modelName = "UserResponse";
UserResponse.tableName = "user_responses";

UserResponse.formatForResponse = (response) => {
  if (!response) return null;

  const formatted = {
    ...response,
    id: response.id.toString(),
    user_id: response.user_id.toString(),
    attempt_id: response.attempt_id.toString(),
    question_id: response.question_id.toString(),
    points_awarded: response.points_awarded.toString(),
  };

  if (response.selected_option_id) {
    formatted.selected_option_id = response.selected_option_id.toString();
  }

  return formatted;
};

export default UserResponse;

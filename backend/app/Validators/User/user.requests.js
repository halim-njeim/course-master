import { body, param } from "express-validator";
import FormRequest from "../Requests/FormRequest.js";

export class UpdateUserRequest extends FormRequest {
  static rules = () => {
    return [
      param("id")
        .notEmpty()
        .withMessage("User ID is required")
        .isNumeric()
        .withMessage("User ID must be numeric"),

      body("fullname")
        .optional()
        .isLength({ min: 3, max: 255 })
        .withMessage("Full name must be between 3 and 255 characters"),

      body("email")
        .optional()
        .isEmail()
        .withMessage("Email must be a valid email address")
        .normalizeEmail(),
    ];
  };

  static messages = () => {
    return {
      "id.required": "User ID is required",
      "id.numeric": "User ID must be numeric",
      "fullname.min": "Full name must be at least 3 characters long",
      "fullname.max": "Full name cannot exceed 255 characters",
      "email.email": "Email must be a valid email address",
    };
  };
}

export class UserIdRequest extends FormRequest {
  static rules = () => {
    return [
      param("id")
        .notEmpty()
        .withMessage("User ID is required")
        .isNumeric()
        .withMessage("User ID must be numeric"),
    ];
  };

  static messages = () => {
    return {
      "id.required": "User ID is required",
      "id.numeric": "User ID must be numeric",
    };
  };
}

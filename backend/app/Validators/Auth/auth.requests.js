import { body } from "express-validator";
import FormRequest from "../Requests/FormRequest.js";

export class RegisterRequest extends FormRequest {
  static rules = () => {
    return [
      body("fullname")
        .notEmpty()
        .withMessage("Full name is required")
        .isLength({ min: 3, max: 255 })
        .withMessage("Full name must be between 3 and 255 characters"),

      body("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Email must be a valid email address")
        .normalizeEmail(),

      body("password")
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long")
        .matches(/\d/)
        .withMessage("Password must contain at least one number"),
    ];
  };

  static messages = () => {
    return {
      "fullname.required": "Full name is required",
      "email.required": "Email is required",
      "email.email": "Email must be a valid email address",
      "password.required": "Password is required",
      "password.min": "Password must be at least 6 characters long",
    };
  };
}

export class LoginRequest extends FormRequest {
  static rules = () => {
    return [
      body("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Email must be a valid email address")
        .normalizeEmail(),

      body("password").notEmpty().withMessage("Password is required"),
    ];
  };

  static messages = () => {
    return {
      "email.required": "Email is required",
      "email.email": "Email must be a valid email address",
      "password.required": "Password is required",
    };
  };
}

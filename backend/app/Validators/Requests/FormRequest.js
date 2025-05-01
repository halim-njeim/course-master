import { validationResult } from "express-validator";
import {
  errorResponse,
  requestErrorResponse,
} from "../../Traits/response.traits.js";

class FormRequest {
  static rules() {
    return [];
  }

  static messages() {
    return {};
  }

  static validate(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const formattedErrors = errors.array().map((error) => ({
          field: error.param,
          message: error.msg,
        }));

        return requestErrorResponse(res, "Validation Error", formattedErrors);
      }

      next();
    } catch (error) {
      console.error("Validation error:", error);
      return errorResponse(res, error, 500);
    }
  }

  static middleware() {
    return [...this.rules(), this.validate];
  }
}

export default FormRequest;

import { validationResult } from "express-validator";
import { errorResponse } from "../../Traits/response.traits";

class FormRequest {
  static rules = () => {
    return [];
  };

  static messages = () => {
    return {};
  };

  static validate = (req, res, next) => {
    const validationChain = this.rules();

    return Promise.all(
      validationChain.map((validation) => validation.run(req))
    ).then(() => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return errorResponse(res, "Validation failed", 422, errors.array());
      }
      next();
    });
  };
}

export default FormRequest;

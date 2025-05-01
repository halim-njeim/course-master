export const successResponse = (res, data, code = 200) => {
  const responseData = typeof data === "string" ? { message: data } : data;

  return res.status(code).json({
    status: "success",
    ...responseData,
  });
};

export const errorResponse = (res, error, code = 500) => {
  const errorMessage =
    error instanceof Error
      ? error.message
      : typeof error === "string"
      ? error
      : "An error occured";

  return res.status(code).json({
    status: "error",
    message: errorMessage,
  });
};

export const notFoundResponse = (res, message = "Resource not found") => {
  return res.status(404).json({
    status: "error",
    message,
  });
};

export const requestErrorResponse = (
  res,
  message = "Validation failed",
  errors = { Validation: "error" }
) => {
  return res.status(422).json({
    status: "error",
    message,
    errors,
  });
};

import { body, validationResult } from "express-validator";
function createEmployeeValidations() {
  return [
    body("name", "name is required").notEmpty().isLength({ min: 2, max: 30 }),
    body("email", "email is required").isEmail(),
    body("mobileNumber", "mobileNumber is required").isMobilePhone(),
    body("designation", "designation is required")
      .notEmpty()
      .isLength({ min: 2, max: 30 }),
    body("gender", "gender is required")
      .notEmpty()
      .isLength({ min: 2, max: 30 }),
    body("course", "course is required")
      .notEmpty()
      .isLength({ min: 2, max: 30 }),
    body("imgUrl", "imgUrl is required").notEmpty(),
  ];
}
function adminLoginValidations() {
  return [body("email", "email is required").isEmail()];
}

function errorMiddleware(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "validation Failed",
      status: false,
      errors: errors.array(),
    });
  }
  return next();
}

export { createEmployeeValidations, adminLoginValidations, errorMiddleware };

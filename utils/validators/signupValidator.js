import { body } from "express-validator";
import User from "../../models/user.js";

const isValidEmailDomain = (value) => {
  const allowedDomain = "koovs.com";
  const [, domainUsed] = value.split("@");
  if (allowedDomain !== domainUsed) {
    throw new Error("Email should be example@koovs.com");
  }
  return true;
};

const isEmailAlreadyExist = async (value) => {
    const result = await User.findOne({email: value}).exec();
    if(result){
        throw new Error("Email already exist");
    }
    return true;
};

const isValidconfirmPassword = (value, { req }) => {
  if (value !== req.body.password) {
    throw new Error("Password have to match!");
  }
  return true;
};

export const signupValidator = [
  body("email")
    .isEmail()
    .withMessage("Invalid email address")
    .custom(isValidEmailDomain)
    .custom(isEmailAlreadyExist),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Please enter a password atleast 6 character long"),

  body("confirmPassword").custom(isValidconfirmPassword),
];

import { body } from "express-validator";
import User from "../../models/user.js";
import bcrypt from "bcrypt";

const isValidEmailDomain = (value) => {
  const allowedDomain = "koovs.com";
  const [, domainUsed] = value.split("@");
  if (allowedDomain !== domainUsed) {
    throw new Error("Email should be example@koovs.com");
  }
  return true;
};

const isEmailNotExist = async (value) => {
  const result = await User.findOne({ email: value }).exec();
  if (result) {
    return true;
  }
  throw new Error("Email not exist");
};

const isPasswordCorrect = async (value, { req }) => {
  const { email } = req.body;
  const { password } = await User.findOne({ email }).exec();
  const isSame = await bcrypt.compare(value, password);
  if (!isSame) {
    throw new Error('Wrong password!');
  }
  return true;
};

export const signinValidator = [
  body("email")
    .isEmail()
    .withMessage("Invalid email address")
    .custom(isValidEmailDomain)
    .custom(isEmailNotExist),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Please enter a password atleast 6 character long")
    .custom(isPasswordCorrect),
];

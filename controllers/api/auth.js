import User from "../../models/user.js";
import { saltRounds } from "../../constants/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = async ({ email, password }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const user = await User.create({
        email: email,
        password: hashedPassword,
      });
      resolve(user);
    } catch (err) {
      reject(err);
    }
  });
};

export const generateToken = ({ email }) => {
  return new Promise((resolve, reject) => {
    try {
      const token = jwt.sign({ email }, process.env.secretKey, {
        expiresIn: "1h",
      });
      resolve(token);
    } catch (err) {
      reject(err);
    }
  });
};

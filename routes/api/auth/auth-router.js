import express from "express";
import { signupValidator } from "../../../utils/validators/signupValidator.js";
import { signinValidator } from "../../../utils/validators/signinValidator.js";
import { validationResult } from "express-validator";
import { createUser, generateToken } from "../../../controllers/api/auth.js";

const router = express.Router();

router.post("/signup", signupValidator, async (req, res) => {
  const { email, password } = req.body;
  const { errors } = validationResult(req);
  if (errors.length !== 0) {
    const { msg } = errors[0];
    return res.status(422).json({ msg });
  }
  try {
    const user = await createUser({ email, password });
    res.status(200).json(user);
  } catch (err) {
    res.status(501).json({ msg: "Something went wrong" });
  }
});

router.post("/signin", signinValidator, async (req, res) => {
  const { email, password } = req.body;
  const { errors } = validationResult(req);
  if (errors.length !== 0) {
    const { msg } = errors[0];
    return res.status(422).json({ msg });
  }
  try {
    const token = await generateToken({email});
    res.status(200).json({token});
  } catch (err) {
    res.status(501).json({ msg: "Something went wrong" });
  }
});

export default router;

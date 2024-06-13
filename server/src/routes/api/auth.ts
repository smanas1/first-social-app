import express from "express";
import registerController from "../../controllers/registerController";
import {
  emailVerifyController,
  loginController,
} from "../../controllers/userController";

const authRoutes = express.Router();

authRoutes.post("/register", registerController);
authRoutes.post("/emailverify", emailVerifyController);
authRoutes.post("/login", loginController);

export default authRoutes;

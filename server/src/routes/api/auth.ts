import express from "express";
import registerController from "../../controllers/registerController";
import {
  emailVerifyController,
  loginController,
} from "../../controllers/userController";
import { emailVerifyMiddleware } from "../../middlewares/authMiddleware";

const authRoutes = express.Router();

authRoutes.post("/register", registerController);
authRoutes.post("/emailverify", emailVerifyController);
authRoutes.post("/login", emailVerifyMiddleware, loginController);

export default authRoutes;

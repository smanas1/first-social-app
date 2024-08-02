import express from "express";
import registerController from "../../controllers/registerController";
import {
  auth,
  emailVerifyController,
  loginController,
  reEmailVerify,
} from "../../controllers/userController";
import { authUser } from "../../middlewares/authMiddleware";

const authRoutes = express.Router();

authRoutes.post("/register", registerController);
authRoutes.post("/emailverify", emailVerifyController);
authRoutes.post("/login", loginController);
authRoutes.post("/reemailverify", reEmailVerify);
authRoutes.get("/auth", authUser, auth);

export default authRoutes;

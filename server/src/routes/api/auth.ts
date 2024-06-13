import express from "express";
import registerController from "../../controllers/registerController";
import { emailVerifyController } from "../../controllers/userController";

const authRoutes = express.Router();

authRoutes.post("/register", registerController);
authRoutes.post("/emailverify", emailVerifyController);

export default authRoutes;

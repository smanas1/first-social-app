import express from "express";
import registerController from "../../controllers/registerController";

const authRoutes = express.Router();

authRoutes.post("/register", registerController);

export default authRoutes;

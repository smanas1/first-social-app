import express from "express";
import authRoutes from "./auth";

const apiRoutes = express.Router();

apiRoutes.use("/auth", authRoutes);

export default apiRoutes;

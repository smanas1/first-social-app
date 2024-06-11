import express from "express";
import apiRoutes from "./api";

const routes = express.Router();

routes.use("/api/v1", apiRoutes);

export default routes;

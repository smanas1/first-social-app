import express from "express";
import authRoutes from "./auth";
import router from "./post";

const apiRoutes = express.Router();

apiRoutes.use("/auth", authRoutes);
apiRoutes.use("/post", router);

export default apiRoutes;

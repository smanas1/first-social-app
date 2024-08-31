import express from "express";
import { createPost } from "../../controllers/postController";
const router = express.Router();

router.post("/createpost", createPost);

export default router;

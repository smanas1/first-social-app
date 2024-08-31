import { Request, Response } from "express";

export const createPost = (req: Request, res: Response) => {
  res.send("Hello Post");
};

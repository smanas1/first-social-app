import { NextFunction, Request, Response } from "express";
import { UserModel } from "../models/userModel";

export const emailVerifyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      throw res.status(400).send("User not Exist");
    }
    if (user?.verified == true) {
      next();
    } else {
      throw res.status(400).send("User not verified");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

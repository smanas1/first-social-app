import { NextFunction, Request, Response } from "express";
import { UserModel } from "../models/userModel";
import jwt from "jsonwebtoken";

export const authUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw res.status(401).send("Token is required");
    }
    jwt.verify(token, process.env.JWT_KEY as string, function (err, decoded) {
      if (err) {
        throw res.status(401).send("Token is not valid");
      }
      next();
    });
  } catch (error) {}
};

import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send("Token is required");
    }
    jwt.verify(token, process.env.JWT_KEY as string, function (err, user) {
      if (err) {
        return res.status(401).send("Token is not valid");
      }
      (req as any).user = user; // Add (req as any) to bypass the type checking
      next();
    });
  } catch (error) {}
};

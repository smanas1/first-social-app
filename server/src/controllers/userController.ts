import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/userModel";
import dotenv from "dotenv";
dotenv.config();
interface JwtPayload {
  id: string;
}
export const emailVerifyController = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;

    const decoded = jwt.verify(token, process.env.JWT_KEY!) as JwtPayload;

    const user = await UserModel.findById({ _id: decoded.id });

    if (user!.verified == true) {
      throw res.status(200).send("Email Already Verified");
    } else {
      try {
        await UserModel.findByIdAndUpdate(
          { _id: decoded.id },
          { verified: true }
        );
        res.status(200).send("Email Verify Sucessfully");
      } catch (error) {
        throw res.status(400).send("Initial Server Errror");
      }
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

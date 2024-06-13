import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/userModel";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();

interface JwtPayload {
  id: string;
}

interface user {
  password: string;
  _id: string;
  fName: string;
  lName: string;
  username: string;
  email: string;
  verified: boolean;
}
// Login
export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = (await UserModel.findOne({ email: email })) as user;

    const match = await bcrypt.compare(password, user.password);

    if (match) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_KEY!, {
        expiresIn: "7d",
      });
      res.status(200).send({
        token: token,
        fname: user.fName,
        lname: user.lName,
        email: user.email,
        username: user.username,
        verifyed: user.verified,
      });
    } else {
      throw res.status(400).send("Wrong Password");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
// Email Verification
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

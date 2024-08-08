import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/userModel";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import emailTemplate from "../helpers/emailTemplate";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "anasolin01777@gmail.com",
    pass: process.env.APP_PASS!,
  },
});

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
   return res.status(401).send("User Not Exist");
  }
};
// Email Verification
export const emailVerifyController = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;
    

    const decoded = jwt.verify(token, process.env.JWT_KEY!) as JwtPayload;
    const decodedid = jwt.verify(decoded.id, process.env.JWT_KEY!) as JwtPayload;
    console.log(decodedid.id)

    const user = await UserModel.findById({ _id: decodedid.id });

    if (user?.verified == true) {
      return res.status(200).json("Email Already Verified");
    } else {
      try {
        await UserModel.findByIdAndUpdate(
          { _id: decodedid.id },
          { verified: true }
        );
        return res.status(200).json("Email Verify Sucessfully");
      } catch (error) {
        return res.status(400).send("Initial Server Errror");
      }
    }
  } catch (error) {
    return res.status(400).send("Your Link is Expired Or Invalid");
  }
};
// Middleware

// Re Verify Email

export const reEmailVerify = async(req:Request,res:Response) => { 

try {
  var decoded = jwt.verify(req.body.token, process.env.JWT_KEY!) as JwtPayload;
 
  const user = await UserModel.findById({_id:decoded.id})
  
  if (!user) {
    return res.status(404).send("User Not Found");
  }
  if(user.verified === true){
    return res.status(400).send("Email already verified")
  }
  const token = jwt.sign({id: req.body.token},process.env.JWT_KEY!,{expiresIn:"1h"})


  await transporter.sendMail({
    from: "Social", // sender address
    to: user.email, // list of receivers
    subject: "Social Verify", // Subject line
    html: emailTemplate(user.username, token), // html body
  });
 res.status(200).json("Check your email")
} catch (error) {
  console.log(error.message)
}
 }

export const auth = (req: Request, res: Response) => {
  res.send("Welcome middleware");
};

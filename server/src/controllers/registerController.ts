import express, { Request, Response } from "express";
import { emailValidator, nameValidator } from "../helpers/validation";
import { UserModel } from "../models/userModel";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import emailTemplate from "../helpers/emailTemplate";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "anasolin01777@gmail.com",
    pass: process.env.APP_PASS!,
  },
});

const registerController = async (req: Request, res: Response) => {
  try {
    const {
      fName,
      lName,
      username,
      email,
      password,
      bDay,
      bMonth,
      bYear,
      gender,
    } = req.body;

    const existingMail = await UserModel.findOne({ email: email });
    const existiUsername = await UserModel.findOne({ username: username });

    if (existingMail) {
      return res.status(400).send("User Already Exists");
    }
    if (existiUsername?.username == username) {
      return res
        .status(400)
        .send(`Username Already Exists Try another One ${username}`);
    }
    if (!emailValidator(email)) {
      return res.status(400).send("Invalid Email");
    }

    if (!nameValidator(fName, 2, 7)) {
      return res
        .status(400)
        .send(
          "First Name must be minimum 2 characters and maximum 7 characters"
        );
    }

    if (!nameValidator(lName, 3, 7)) {
      return res
        .status(400)
        .send(
          "Last Name must be minimum 3 characters and maximum 7 characters"
        );
    }

    if (!nameValidator(username, 3, 7)) {
      return res
        .status(400)
        .send("Username must be minimum 3 characters and maximum 7 characters");
    }

    if (!nameValidator(password, 6, 50)) {
      return res.status(400).send("password must be at least 6 characters");
    }

    bcrypt.hash(password, 10, async function (err, hash) {
      try {
        if (err) {
          return res.status(500).send("Internal Server Error");
        }
        const user = new UserModel({
          fName,
          lName,
          username,
          email,
          password: hash,
          bDay,
          bMonth,
          bYear,
          gender,
        });

        await user.save();
        var token = jwt.sign({ id: user._id }, process.env.JWT_KEY!, {
          expiresIn: "5m",
        });
        await transporter.sendMail({
          from: "Social", // sender address
          to: email, // list of receivers
          subject: "Link Verify", // Subject line
          html: emailTemplate(user.username, token), // html body
        });

        res.send(user);
      } catch (error) {
        // return res.status(400).send("Initial Server Error ");
        console.log(error.message);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export default registerController;

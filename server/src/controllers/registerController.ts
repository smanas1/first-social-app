import express, { Request, Response } from "express";
import { emailValidator, nameValidator } from "../helpers/validation";
import { UserModel } from "../models/userModel";

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

    if (existingMail) {
      return res.status(400).send("User Already Exists");
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
    const user = new UserModel({
      fName,
      lName,
      username,
      email,
      password,
      bDay,
      bMonth,
      bYear,
      gender,
    });

    user.save();

    res.send(user);
  } catch (error) {
    console.log(error);
  }
};

export default registerController;

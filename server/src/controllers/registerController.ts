import express, { Request, Response } from "express";
const registerController = (req: Request, res: Response) => {
  res.send("Welcome");
};
export default registerController;

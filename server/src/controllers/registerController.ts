import express, { Request, Response } from "express";

const registerController = (req: Request, res: Response) => {
  res.send(req.body);
};

export default registerController;

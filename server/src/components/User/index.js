"use strict";

import express from "express";
const userRouter = express.Router();

import send from "../../utils/send";

userRouter.get(
  "/",
  async (req, res, next) => {
    res.locals.data = { message: "you hit the user endpoint!" };
    next();
  },
  send
);

export default userRouter;

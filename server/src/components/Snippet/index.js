"use strict";

import express from "express";
const snippetRouter = express.Router();

import send from "../../utils/send";

snippetRouter.get(
  "/",
  async (req, res, next) => {
    res.locals.data = { message: "you hit the snippet endpoint!" };
    next();
  },
  send
);

export default snippetRouter;

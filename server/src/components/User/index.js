"use strict";

var express = require("express");
var userRouter = express.Router();

import { send } from "../../utils/send";

userRouter.get(
  "/",
  async (req, res, next) => {
    res.locals.data = { message: "you hit the user endpoint!" };
    next();
  },
  send
);

module.exports = userRouter;

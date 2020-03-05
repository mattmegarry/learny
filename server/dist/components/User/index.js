"use strict";

var _send = require("../../utils/send");

var express = require("express");

var userRouter = express.Router();
userRouter.get("/", async (req, res, next) => {
  res.locals.data = {
    message: "you hit the user endpoint!"
  };
  next();
}, _send.send);
module.exports = userRouter;
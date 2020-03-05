"use strict";

var _send = require("../../utils/send");

var express = require("express");

var snippetRouter = express.Router();
snippetRouter.get("/", async (req, res, next) => {
  res.locals.data = {
    message: "you hit the snippet endpoint!"
  };
  next();
}, _send.send);
module.exports = snippetRouter;
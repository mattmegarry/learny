"use strict";

var express = require("express");
var snippetRouter = express.Router();

import { send } from "../../utils/send";

snippetRouter.get(
  "/",
  async (req, res, next) => {
    res.locals.data = { message: "you hit the snippet endpoint!" };
    next();
  },
  send
);

module.exports = snippetRouter;

"use strict";

const express = require("express");
const apiRouter = express.Router();

import userRouter from "./User";
import snippetRouter from "./Snippet";

apiRouter.use("/user", userRouter);
apiRouter.use("/snippet", snippetRouter);

module.exports = apiRouter;

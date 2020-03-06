"use strict";

import express from "express";
const apiRouter = express.Router();

import userRouter from "./User";
import snippetRouter from "./Snippet";

apiRouter.use("/user", userRouter);
apiRouter.use("/snippet", snippetRouter);

export default apiRouter;

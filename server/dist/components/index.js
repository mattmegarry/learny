"use strict";

var _User = _interopRequireDefault(require("./User"));

var _Snippet = _interopRequireDefault(require("./Snippet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require("express");

const apiRouter = express.Router();
apiRouter.use("/user", _User.default);
apiRouter.use("/snippet", _Snippet.default);
module.exports = apiRouter;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _send = _interopRequireDefault(require("../../utils/send"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const snippetRouter = _express.default.Router();

snippetRouter.get("/", async (req, res, next) => {
  res.locals.data = {
    message: "you hit the snippet endpoint!"
  };
  next();
}, _send.default);
var _default = snippetRouter;
exports.default = _default;
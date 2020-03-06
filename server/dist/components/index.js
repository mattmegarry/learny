"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _User = _interopRequireDefault(require("./User"));

var _Snippet = _interopRequireDefault(require("./Snippet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const apiRouter = _express.default.Router();

apiRouter.use("/user", _User.default);
apiRouter.use("/snippet", _Snippet.default);
var _default = apiRouter;
exports.default = _default;
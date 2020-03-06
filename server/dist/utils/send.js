"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const send = (req, res) => {
  const {
    status,
    data
  } = res.locals;
  res.status(status || 200).json(data);
};

var _default = send;
exports.default = _default;
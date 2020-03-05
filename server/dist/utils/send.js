"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.send = void 0;

const send = (req, res) => {
  const {
    status,
    data
  } = res.locals;
  res.status(status || 200).json(data);
};

exports.send = send;
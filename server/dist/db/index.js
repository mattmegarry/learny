"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const camelcaseKeys = require("camelcase-keys");

const pgp = require("pg-promise")({// Initialization Options
});

const cn = process.env.PG_CONNECTION_STRING;
const dbInstance = pgp(cn);

async function queryReturningNone(queryText) {
  const result = await dbInstance.none(queryText).catch(err => {
    console.log(err);
  });
  return result;
}

async function queryReturningOne(queryText, values) {
  const result = await dbInstance.one(queryText, values).then(res => {
    return res;
  }).then(res => {
    return camelcaseKeys(res);
  }).catch(err => {
    if (err.received === 0) {
      return null;
    } else {
      console.log(err);
    }
  });
  return result;
}

async function queryReturningMany(queryText, values) {
  const result = dbInstance.many(queryText, values).then(res => {
    return res;
  }).then(res => {
    return camelcaseKeys(res);
  }).catch(err => {
    if (err.received === 0) {
      return null;
    } else {
      console.log(err);
    }
  });
  return result;
}

const db = {
  queryReturningNone,
  queryReturningOne,
  queryReturningMany
};
var _default = db;
exports.default = _default;
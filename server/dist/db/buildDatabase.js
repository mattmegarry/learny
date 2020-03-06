"use strict";

var _index = _interopRequireDefault(require("./index"));

var _asyncForEach = _interopRequireDefault(require("../utils/asyncForEach"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const users = `CREATE TABLE IF NOT EXISTS
      users(
        id UUID PRIMARY KEY,
        email VARCHAR(200),
        password_hash VARCHAR(200)
      )`;
const snippets = `CREATE TABLE IF NOT EXISTS
      snippets(
        id UUID PRIMARY KEY,
        main_text VARCHAR(200),
        user_id UUID NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
      )`;
const tableQueries = [users, snippets];
const tableNames = ["users", "snippets"];

async function createAllTables() {
  await (0, _asyncForEach.default)(tableQueries, async queryText => {
    await _index.default.queryReturningNone(queryText);
  });
  return true;
}

async function dropAllTables() {
  await (0, _asyncForEach.default)(tableNames, async tableName => {
    await _index.default.queryReturningNone(`DROP TABLE IF EXISTS ${tableName} CASCADE`, [tableName]);
  });
  return true;
}

async function dropAndBuildTables() {
  await dropAllTables();
  await createAllTables();
  console.log("Done");
}

dropAndBuildTables();
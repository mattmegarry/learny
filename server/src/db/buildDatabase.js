"use strict";

const db = require("./index");
const { asyncForEach } = require("../utils/asyncForEach");

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
  await asyncForEach(tableQueries, async queryText => {
    await db.queryReturningNone(queryText);
  });
  return true;
}

async function dropAllTables() {
  await asyncForEach(tableNames, async tableName => {
    await db.queryReturningNone(`DROP TABLE IF EXISTS ${tableName} CASCADE`, [
      tableName
    ]);
  });
  return true;
}

async function dropAndBuildTables() {
  await dropAllTables();
  await createAllTables();
  console.log("Done");
}

dropAndBuildTables();

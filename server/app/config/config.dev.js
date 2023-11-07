const fs = require("fs");
const path = require("path");
const configBase = require("./config.base.js");

const config = {...configBase};

// add mysql config
config.mysql = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123456",
  database: "angke",
};


//sql debug
config.debug = true;
config.env = "dev";

module.exports = config;

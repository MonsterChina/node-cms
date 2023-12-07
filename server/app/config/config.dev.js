
const configBase = require("./config.base.js");

const config = {...configBase};

// add mysql config
config.mysql = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123456",
  database: "chanyue",
};

//sql debug
config.debug = false;
config.env = "dev";

// 日志
config.logger = {
  level: 'dev',
};

module.exports = config;

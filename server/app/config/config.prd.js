
const configBase = require("./config.base.js");

const config = {...configBase};

// add mysql config
config.database = {
  // client: "mysql2", 默认mysql
  host: "localhost",
  // port: "3306",默认3306
  user: "root",
  password: "123456",
  database: "chanyue",
  // charset: "utf8mb4",
};

//sql debug
config.debug = false;
config.env = "prd";

// 日志
config.logger = {
  level: 'tiny',
};


module.exports = config;

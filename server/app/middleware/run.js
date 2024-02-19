const express = require("express");
const cookieParser = require("cookie-parser");
const favicon = require("serve-favicon");
const morgan = require("morgan");
const path = require("path");

const sysconfig = require("./config.js");
const view = require("./view.js");
const router = require("../router.js");
module.exports = async function (app) {
  //挂载配置
  await sysconfig(app);

  const { logger,APP_PATH, cookieKey, maxAge } = app.locals.config;
  //日志
  app.use(morgan(logger.level));

  // favicon 图标
  app.use(favicon(path.join(APP_PATH, "public/favicon.ico")));

  //cookie
  app.use(cookieParser(cookieKey));

  //解析接口 json & url
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  //配置模板引擎
  view(app);

  //使用静态资源 ,
  app.use(
    "/public",
    express.static(path.join(APP_PATH, "public"), {
      maxAge:maxAge,
    })
  );

  //路由
  app.use(router);
};

const SysAppService = require("../modules/api/service/sysApp.js");
const config = require("../config/index.js");
const auth = require("./auth.js");
const helper = require("../extend/helper.js");

// 所有配置入口
module.exports = async function (app) {
  try {
    let sysconfig = await SysAppService.find();
    //静态资源缓存
    sysconfig.maxAge = sysconfig.maxAge == "1" ? "1d" : 0;
    app.locals.config = { ...config, ...sysconfig };
    app.locals.auth = auth;
    app.locals.helper = helper;
    if (config.debug) {
        console.log("config", app.locals.config);
      }
  } catch (error) {
    console.log(error);
  }
};

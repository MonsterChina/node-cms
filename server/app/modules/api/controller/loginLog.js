const dayjs = require("dayjs");
const LoginLogService = require("../service/loginLog.js");
const {
  helper: { success,getIp},
} = require("../../config.js");

class LoginLogController {

  // 增
  static async create(req, res, next) {
    try {
      const {uid} = req.body;
      let body = {
        uid,
        ip: getIp(req),
      }
      const data = await LoginLogService.create(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const data = await LoginLogService.delete();
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 列表
  static async list(req, res, next) {
    try {
      const cur = req.query.cur;
      const pageSize = 10;
      let data = await LoginLogService.list(cur, pageSize);
      data.list.forEach((ele) => {
        ele.createdAt = dayjs(ele.createdAt).format("YYYY-MM-DD HH:mm:ss");
      });
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }
 
}

module.exports = LoginLogController;

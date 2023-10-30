const SysRoleService = require("../service/sysRole.js");
const {
  helper: {  success},
} = require("../../config.js");

class SysRoleController {
 
  // 增
  static async create(req, res, next) {
    try {
      const body = req.body;
      const data = await SysRoleService.create(body);
      res.json({ ...success, data: data })
    } catch (err) {
      next(err);
    }
  }


  // 删除
  static async delete(req, res, next) {
    try {
      const id = req.query.id;
      const data = await SysRoleService.delete(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      const data = await SysRoleService.update(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }
  


  // 查
  static async detail(req, res, next) {
    try {
      const id = req.query.id;
      const data = await SysRoleService.detail(id);
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
      const data = await SysRoleService.list(cur, pageSize);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

}

module.exports = SysRoleController;

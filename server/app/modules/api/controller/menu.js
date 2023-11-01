

const {helper: {success}} = require('../../config.js');
const path = require('path');
const MenuService = require('../service/menu.js');

class MenuController  {

  // 查
  static async find(req, res, next) {
    try {
      const data = await MenuService.find();
      res.json({ ...success, data: data })
    } catch (err) {
      next(err);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      const data = await MenuService.update(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

}

module.exports = MenuController;

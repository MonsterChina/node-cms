const dayjs = require("dayjs");
const {
  config,
  helper: {success, fail },
} = require("../../config.js");
const GatherService = require("../service/gather.js");
const cheerio = require('cheerio');
class GatherController {

  static model = 'gather';

  //测试列表所有地址 
  static async getArticle(req, res, next) {
    try {
      const { targetUrl,
        title,
        content} = req.query;
      const data = await GatherService.common(targetUrl);
        data.title = data[title];
        data.content = data[content]
      res.json({ ...success, data});
    } catch (error) {
      next(error)
    }
  }


  // 增
  static async create(req, res, next) {
    try {
      const body = req.body;
      const data = await GatherService.create(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const id = req.query.id;
      const data = await GatherService.delete(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      const data = await GatherService.update(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 查
  static async detail(req, res, next) {
    try {
      const id = req.query.id;
      const data = await GatherService.detail(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 搜索
  static async search(req, res, next) {
    try {
      const cur = req.query.cur;
      const key = req.query.keyword;
      const pageSize = 10;
      const data = await GatherService.search(key, cur, pageSize);
      data.list.forEach((ele) => {
        ele.createdAt = dayjs(ele.createdAt).format("YYYY-MM-DD HH:mm");
      });
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
      let data = await GatherService.list(cur, pageSize);
      data.list.forEach((ele) => {
        ele.createdAt = dayjs(ele.createdAt).format("YYYY-MM-DD HH:mm");
      });
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }


}

module.exports = GatherController;

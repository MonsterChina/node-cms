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
     

      let titleArr = title.split('.');
      let contentArr = content.split('.');

      //最多支持4层
      if (titleArr.length === 1) {
        data.title = data[title];
      }else if (titleArr.length === 2) {
        data.title = data[titleArr[0]][titleArr[1]];
      } else if (titleArr.length === 3) {
          data.title = data[titleArr[0]][titleArr[1]][titleArr[2]];
      } else if (titleArr.length === 4) {
          data.title = data[titleArr[0]][titleArr[1]][titleArr[2]][titleArr[3]];
      }

   
      //内容
      if (contentArr.length === 1) {
        data.content = data[content];
      }else if (contentArr.length === 2) {
        data.content = data[contentArr[0]][contentArr[1]];
      } else if (contentArr.length === 3) {
          data.content = data[contentArr[0]][contentArr[1]][contentArr[2]];
      } else if (contentArr.length === 4) {
          data.content = data[contentArr[0]][contentArr[1]][contentArr[2]][contentArr[3]];
      }
     //待优化 ？？？
      if(Array.isArray(data.content)&& data.content.length >0){
        let str = '';
        data.content.forEach((item)=>{
          str += '<p>'+Object.values(item)+'</p>'
        })
        data.content = str;
      }
     
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

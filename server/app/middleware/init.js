
const CommonService = require(`../service/web/default/common.js`);
const SiteService = require("../service/api/site.js");
const FragService = require("../service/api/frag.js");
const TagService = require("../service/api/tag.js");
const FriendlinkService = require("../service/api/friendlink");

module.exports = () => {
  return async (req, res, next) => {
    try {
      if ("site" in res.locals) {
        console.log("已存在缓存，不需要重新在取");
        await next();
        return;
      }
      // 站点
      const site = await SiteService.find();
      site.json = site.json ? JSON.parse(site.json) : {};
      // 分类
      const category = await CommonService.category();
      //导航
      const {helper} = req.app.locals
      const nav = helper.tree(category);
      // 友情链接
      let friendlink = await FriendlinkService.list();
      friendlink = friendlink.list || [];
      //样式路径
      const {config} = req.app.locals
      const base_url = `/public/template/${config.template}`;
      //获取碎片 默认获取100条
      const frag = await FragService.list();
      //获取tag标签 默认100条
      const tag = await TagService.list();

      res.locals = { site, nav, category, friendlink, base_url, frag, tag };
      await next();
    } catch (error) {
      next(error)
    }
  };
};

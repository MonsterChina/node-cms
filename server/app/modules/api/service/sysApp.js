const BaseService = require("./base");
const {knex,helper: {success, fail }} = require('../../config.js');



class SysAppService  {
  static model = "sys_app";
  
  static async find() {
    try {
      let res = await BaseService.all(SysAppService.model);
      return res[0];
    } catch (err) {
      console.error(err) 
      return err;
    }
  }

  static async config() {
    try {
      let res =  await knex.select(["template", "uploadWay","maxAge","dataCache"])
      .from(SysAppService.model)
      .limit(1);
      return res[0];
    } catch (err) {
      console.error('1111---->',err)
      return err;
    }
  }




  static async update(body) {
    const { id } = body;
    delete body.id;
    delete body.createdAt;
    delete body.updatedAt;
    try {
        const result = await knex(SysAppService.model)
          .where("id", "=", id)
          .update(body);
        return result ? "success" : "fail";
    } catch (err) {
      console.error(err)
      return err;
    }
  }
}

module.exports = SysAppService;

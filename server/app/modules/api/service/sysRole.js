'use strict';
const {knex} = require('../../config.js');

const BaseService = require('./base.js');

class SysRoleService {
  static model = 'sys_role';

  // 新增
  static async create(body) {
    try {
      const result = await knex(SysRoleService.model).insert(body);
      return result ? "success" : "fail";
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
  }

  // 删
  static async delete(id) {
    try {
      const result = await knex(SysRoleService.model)
        .where("id", "=", id)
        .del();
      return result ? "success" : "fail";
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
  }

  // 修改
  static async update(body) {
    const { id } = body;
    delete body.id;
    try {
      const result = await knex(SysRoleService.model)
        .where("id", "=", id)
        .update(body);
      return result ? "success" : "fail";
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
  }

  // 文章列表
  static async list(cur = 1, pageSize = 10) {
    try {
      // 查询个数
      const total = await knex(SysRoleService.model).count("id", {
        as: "count",
      });
      const offset = parseInt((cur - 1) * pageSize);
      const list = await knex
        .select("*")
        .from(SysRoleService.model)
        .limit(pageSize)
        .offset(offset)
        .orderBy("id", "asc");
      return {
        count: total[0].count,
        total: Math.ceil(total[0].count / pageSize),
        current: +cur,
        list: list,
      };
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
  }

  // 查
  static async detail(id) {
    try {
      const data = await knex(SysRoleService.model)
        .where("id", "=", id)
        .select(['name','value','status']);
      return data[0];
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
  }

}

module.exports = SysRoleService;

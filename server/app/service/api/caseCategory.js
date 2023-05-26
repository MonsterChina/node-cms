'use strict';
const BaseService = require('./base');
const knex = require('../../config/config.knex.js');

class CaseCateogryService extends BaseService {
  static model = 'case_category';
  constructor(props) {
    super(props);
  }

  // 新增
  static async create(body) {
    console.log('body', body)
    try {
      const result = await knex(CaseCateogryService.model).insert(body);
      return result ? 'success' : 'fail';
    } catch (error) {
      console.error(error)
    }
  }

  static async has(name) {
    const result = await knex(CaseCateogryService.model).where('name', '=', name).select(['id']);
    return result.length > 0;
  }

  // 删除tag ,需要删除article_map_tag.js 里面的tid
  static async delete(id) {
    try {
      const has = await knex.raw(`SELECT tid FROM article_map_tag WHERE tid = ${id}`);
      if (has[0].length > 0) {
        return false;
      }
      const res = await knex(CaseCateogryService.model).where('id', '=', id).del();
      // res  返回值是 1
      return res ? 'success' : 'fail';
    } catch (err) {
      console.error(err);
    }
  }

  // 修改
  static async update(body) {
    const { id } = body;
    delete body.id;
    try {
      const result = await knex(CaseCateogryService.model).where('id', '=', id).update(body)
      return result ? 'success' : 'fail';
    } catch (error) {
      console.error(error)
    }
  }

  static async update(body) {
    const { id } = body;
    delete body.id;
    try {
      const result = await knex(CaseCateogryService.model).where('id', '=', id).update(body)
      return result ? 'success' : 'fail';
    } catch (error) {
      console.error(error)
    }
  }


  // 文章列表
  static async list(cur = 1, pageSize = 10) {
    try {
      // 查询个数
      const total = await knex(CaseCateogryService.model).count('id', { as: 'count' });
      const offset = parseInt((cur - 1) * pageSize);
      const list = await knex.select('*')
        .from(CaseCateogryService.model)
        .limit(pageSize)
        .offset(offset)
        .orderBy('id', 'desc');
        const count = total[0].count || 1;
      return {
        count: count,
        total: Math.ceil(count / pageSize),
        current: +cur,
        list: list,
      };

    } catch (err) {
      console.error(err);
    }
  }


  // 查
  static async detail(id) {
    try {
      const data = await knex(CaseCateogryService.model).where('id', '=', id).select()
      return data[0];
    } catch (error) {
      console.error(error)
    }
  }

  // 搜索
  static async search(key = '', cur = 1, pageSize = 10) {
    try {
      // 查询个数
      const total = key ? await knex(CaseCateogryService.model).whereLike('name', `%${key}%`).count('id', { as: 'count' })
        : await knex(CaseCateogryService.model).count('id', { as: 'count' });
      
        console.log('abc', total)
  
      const offset = parseInt((cur - 1) * pageSize);
      const list = key ?
        await knex.select(['id', 'name'])
          .from(CaseCateogryService.model)
          .whereLike('name', `%${key}%`)
          .limit(pageSize)
          .offset(offset)
          .orderBy('id', 'desc')
        : await knex.select(['id', 'name'])
          .from(CaseCateogryService.model)
          .limit(pageSize)
          .offset(offset)
          .orderBy('id', 'desc');
          console.log('list', list)

          const count = total[0].count || 1;
        return {
          count: count,
          total: Math.ceil(count / pageSize),
          current: +cur,
          list: list,
        };

    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = CaseCateogryService;
# <center>禅悦内容管理系统（`chanyue-cms`）</center>

禅悦CMS是一款基于Express和MySQL研发的高质量实用型CMS管理系统。它具备多种类型网站开发，易扩展、基于模块化和插件化开发模式，适用于商用企业级程序开发。

## 🌈系统特色

* 轻量、灵活、稳定、高性能。
* SEO。专注于`seo`,伪静态`html`和拼音导航，灵活设置关键词和描述。
* 安全。基于`knex`,高防`sql`注入，接口权限校验，为安全提供保障。
* 灵活。碎片功能，支持零碎文案配置，方便各类灵活文案配置。
* 高扩展。支持扩展模型，字段配置，可动态生成表，超强扩展。
* 模块化。一切模块相互独立，互不干扰。
* 插件化。灵活开发，支持完整功能模块。

## 🚧功能介绍

* 网站信息
* 站点管理
* 栏目管理
* 文章模块
* 标签管理
* 碎片管理 (广告，碎片文案，公司地址、电话、名称，微信等万能模块)
* 扩展模型
* 文章采集
* 用户管理
* 菜单管理
* 登录日志
* 在线留言
* 中英切换
* 语音播报
* pdf预览（按需加载）
* 本地上传&七牛云上传
* 日志功能

## ⛱️软件架构

**client技术栈**

后台管理界面admin

* vue3
* vue-router
* pina
* element-plus
* vite4
* tinymce
  
**服务端技术栈**

* nodejs v18.14.2+
* express 4.18+
* mysql v5.7.26
* knex (sql操作)
* art-tempate v4.13.2+
* pm2   v5.2.2
* jwt  
* pm2 (prd)
* nodemon (dev)
  
### 项目架构

```
server 部署代码
|- app
    |- config
    |- extend 
    |- middleware 
    |- modules
      |-api 
        |-- controller
        |-- service
        |-- router.js
      |-home 
        |-- controller
        |-- middleware
        |-- service
        |-- view
        |-- router.js
    |- plugin 
        |- open
          |-- controller
          |-- service
          |-- view
          |-- router.js
    |- public
    |- utils
    |- router.js
  app.js
  ```

### 🍅️案例

* 案例一 [香港日报](http://www.hongkongdaily.net/) `http://www.hongkongdaily.net/`
* 案例一 [七弈国象](https://doc.7yi.link/) `https://doc.7yi.link/`
* 案例二 [世界气功网](http://www.shijieqigong.com/) `http://www.shijieqigong.com/`
* 案例三 [世界大健康运动联盟](http://www.worldhealthgames.com/) `http://www.worldhealthgames.com/`
* 案例四 [北京辉达环保科技有限公司](http://www.huidaep.com/) `http://www.huidaep.com/`
* 演示站1 [前端小栈• 禅悦](https://www.nuodefangchan.com/)
* 演示站2 [前端小栈• 禅悦](http://chanyue.zhanhongzhu.top/)

## 👵开发文档

* **官网文档 <https://yanyutao0402.gitee.io/chanyue-doc>**

## ❤️项目关注

* **码云：<https://gitee.com/yanyutao0402/chanyue-cms>**

 **走过路过的老铁,帮忙点个小 ⭐⭐⭐⭐⭐,Watch🤝🤝🤝🤝🤝,Fork🙏🙏🙏🙏🙏**

## 👴项目交流

 欢迎💝
 加入微信群交流使用，🧒 👧 👱  🧔 👴
 联系微信: `yanyutao2014` 🍇 🍋 🍌

![交流微信群](https://gitee.com/yanyutao0402/chanyue-cms/raw/master/server/app/public/template/default/img/wechat-group.jpg)

## 管理后台部分截图

![后台展示](https://gitee.com/yanyutao0402/chanyue-cms/raw/master/server/app/public/template/default/img/info.png)

![后台展示](https://gitee.com/yanyutao0402/chanyue-cms/raw/master/server/app/public/template/default/img/article.png)

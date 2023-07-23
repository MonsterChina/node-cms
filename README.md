# 💒<center>禅悦内容管理系统介绍（`chanyue-cms`）</center>

------
 禅悦内容管理系统，基于`nodejs` `express` `mysql` `knex` `jwt` `vue3` 进行开发的一套实用轻量cms系统，且提供丰富的api数据接口。常用企业网站，微信小程序官网，图片网站，新闻资讯，软件下载网站，博客，文章等诸多文章类型网站开发，也适用于前端二次开发。

## 🌈系统特色

* 轻量
* 稳定
* 妥妥服务于`seo`，伪静态`html`和拼音导航，栏目页面都支持单独设置`seo`关键词
* 基于`SqlBuilder`,高防`sql`注入，接口权限校验，为安全提供保障。
* 专门服务于前端爱好者
* 通过模型扩展，字段配置，可动态生成表，超强扩展，可进行多领域网站开发，博客，新闻，资讯，下载，视频，图片，书籍等网站开发。
* 支持微信小程序登录和api调用
* 支持常用开源API接口，如：60秒读懂世界
* 长期维护更新，非`KPI`项目

## ⛱️软件架构

**client技术栈**

后台管理界面admin和会员中心界面member

* vue3
* vue-router
* pina
* element-plus
* vite3
* tinymce
  
**服务端技术栈**

* nodejs v18.14.2+
* express 4.18+
* mysql v5.7.26
* ejs
* pm2   v5.2.2
* jwt
* pm2 (prd)
* nodemon (dev)
  
## 🍈技术选型说明
  
* **问：很多同学问为啥选择`express`而不是`nest`或`Midway`？**
* 答：`express`全球下载量第一，功能超级稳定，相关依赖包众多（所以不选`koa2`,洋葱皮模型）,依赖包大部分基于`JavaScript`写的，相对于`nest`,`express`更加灵活，轻量。至于为啥不选择`eggjs`/`Midway`，怕了，你懂得。
* **问：为啥不选择`Sequelize`、`typeorm`或者`prisma`作为`orm`框架？**
* 答：`knex`易用，友好，强大，`objection.js`都是基于`knex`开发的。

## 🍒 chanyue-cms历史

**1.第一次构想 2015/6/2**

* 基于`express` `mongoDB`开发第一版cms
  
**2.第二次重构（`koacms`）2018/4/2**

* 基于`koa2` `mysql`重构

**3.第三次重构（`eggcms`） 2020/10/1**

* 基于`egg` `mysql` `Sequelize`重构

**4.第四次重构（`chanyue-cms`）2022/6/12**

* 基于`express` `mysql` `knex`开发第三版，经过多年开发和线上运营，回归最稳定的`express`。

## 🚧功能介绍

* 站点信息
* 管理员登模块
* 无限极栏目分类
* 文章模块
* 扩展模型
* 标签管理
* 碎片管理
* 广告模块
* 友情链接模块
* 在线留言模块
* 微信小程序登录
* 通用`openAPI`接口

### 🍅️案例

* 案例一 [世界气功网](http://www.shijieqigong.com/) `http://www.shijieqigong.com/`
* 案例二 [世界大健康运动联盟](http://www.worldhealthgames.com/) `http://www.worldhealthgames.com/`
* 案例三 [北京辉达环保科技有限公司](http://www.huidaep.com/) `http://www.huidaep.com/`

## ⚡ 本地开发运行

* 1 导入数据库文件

    ```JavaScript
    chanyue.sql(data文件夹里面)
    ```

* 2 修改数据库配置文件

    ```JavaScript
    server/config/config.default.js //开发环境
    server/config/config.prd.js //生产环境
    ```

* 3 进入`server` 文件夹
    设置`npm`源安装依赖

    ```JavaScript
    npm config set registry https://registry.npmmirror.com
    npm i 
    npm run dev 
    ```

    后访问 <http://localhost:81> ，完成网站启动。

* 4.后台管理界面  

   ```html
    http://localhost:81/public/admin/index.html 
    ```

   默认账号密码：**`chanyue`**  **`123456`**

* 5.后端管理界面开发指南（不开发忽略这一步）

    进入`client`文件夹

    ```javascript
    执行`npm i`,`npm run dev`
    ```

    后访问 <http://localhost:3000> 后台管理界面开发，
    功能开发完成后执行npm run build即可。

## 🕊 linux服务器部署

* 1 安装`BT`运维管理工具
* 2 安装 `nginx` `mysql5.6`(5.7也可以，但是比较消耗服务器资源)  `pm2`管理器
* 3 创建`mysql`，导入本地数据库，修改数据库配置文件
* 4 创建网站,绑定域名和设置反向代理,上传代码,

    ```javascript
    `npm i` ,`npm run start`启动即可。
    ```

* 5 配置`https`

## ❤️项目关注

* 码云：   <https://gitee.com/yanyutao0402/chanyue-cms>
* github: <https://github.com/yanyutao/chanyue-cms>

 **走过路过的老铁,帮忙点个小 ⭐⭐⭐⭐⭐,🤝🤝🤝🤝🤝,🙏🙏🙏🙏🙏**

## 👈待开发功能表

 **近期工作内容☕**

* 优化后台管理界面和功能测试
* 开发一套默认模板

 **第一阶段 基本功能开发 2023年☕**

* 后台管理重构升级，适配`pc`/`ipad`/`wap` 完成100%
* 安全测试——参数校验、 `crsf` 、`xss`、 `sql`注入等常规测试
* `pdf`等大文件在线浏览<基于流文件读写实时传输>
* 角色权限管理——`RBAC`权限管理，动态菜单（完成） 动态路由（完成），接口限制 ，按钮限制 40%
* 直播流视频播放
* 静态上传——`oss`第三方上传 七牛云 腾讯云
* 第三方登录——`qq`登录 微信登录 小程序登录（已经over）
* 代码优化—— 缩略图，上传裁剪图片和默认缩略图，无用代码删除
* 优化数据库 业务逻辑优化 进度10%
  
 **第二阶段 完善功能开发 2024年🍵**

* 个人中心
* 开发标签生成工具
* 美化后台界面
* 制作多模板
* 开发官网？等等看吧

 **第三阶段 未来**

* 操作日志管理——异常登录推送邮件
* 推送：可实现即时聊天功能
* 多语言中英文 （？可能不做,多站点部署即可）
* 会员模块—— 邮箱注册 支持登录 文章评论 点赞 收藏（？可能不做）
* 文章付费—— `super`会员 `vip`会员 注册会员（？可能不做）
* 支付模块——微信支付 支付宝支付（？可能不做）

## 开发交流

 欢迎💝
 各界技术大佬交流，🧒 👧 👱  🧔 👴 👵
 联系微信: `yanyutao2014` 🍇 🍋 🍌

## 🍋更新日志 2023-07-22

* 后台重构完成，支持自适应布局

## 🍒更新日志 2023-07-09

* 后台管理界面重构升级，支持动态配置路由

## 🍒更新日志 2023-04-01

* 修复knex重构导致不显示分页问题

## 🍑更新日志 2023-03-20

* 动态后台菜单接口开发完成

## 🍑更新日志 2023-03-17

* 优化 订单表 会员表
* 新增 商品表

## 🍒更新日志 2023-03-16

* 新增 系统配置表、 公告通知表
* 新增 菜单表、 角色表、  角色-菜单表、 用户表 、用户-角色表

## 🍓更新日志 2023-03-15

* 新增API 每日简报

## 🥝更新日志 2023-03-09

* 优化微信小程序登录
* 新增API 60秒读懂世界

## 🍈更新日志 2023-03-05

* 更新`node`版本为v18.14.2
* 更新`mysql2`为v3.2.0
* 优化微信小程序登录功能使用原生`fetch`语法，删掉`axios`依赖

# 💒 萨埵（saduo-wap）

萨埵(saduo-wap)移动端通用框架，基于vite4、vue3、vue-router、 pinia、 vant4、vconsole、 mitt、 axios构建的通用移动端h5项目通用模板,零配置，支持rem适配,支持jsonp请求,微信内置web-view等wap等项目开发，开发者可专注于业务开发，提高开发效率。

## ⛱️ 技术架构

```sh
|- vue3.2
|- vue-router 4.1
|- pina 2
|- axios 1.3
|- vconsole 移动端调试
|- vite4.1.1
|- vant4
|- mitt 全局事件，观察者模式（发布订阅模式）
|- js-Cookie 操作cookie
```

## 🌈 特点

* 通用，适用于任何移动端wap项目
* 轻量，无任何业务功能
* 快捷，安装依赖包，可直接进入业务开发，无需关心任何配置
* 实时，定期更新依赖包，实时升级技术架构

## 👦 安装运行

```sh
npm install
npm run dev
npm run dev:sit    sit环境开发运行
npm run dev:prd    prd环境运行
npm run build      打包
npm run build:sit  打包构建sit环境
npm run build:prd  打包构建prd环境
```

## ⚡ lint检验和修复

```sh
npm run lint
```

## 🍅️ 最佳实践

* 开发工具vscode
* 安装插件 ESLint 、markdownlint 、TypeScript Vue Plugin(Volar) 、vue3 Snippets 、Vue Language Features(Volar)

## ❤️ 仓库地址

* 码云：   <https://gitee.com/yanyutao0402/saduo-wap>

走过路过的老铁,帮忙点个小 ⭐⭐⭐⭐⭐,🤝🤝🤝🤝🤝,🙏🙏🙏🙏🙏

## 🚧更新2023-03-08

* 1.打包兼容性不在兼容ie
* 2.引入微信sdk，支持微信web-view中web页面调用微信跳转等方法
* 3.升级node版本 v18.14.2

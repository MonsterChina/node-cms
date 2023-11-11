const express = require('express');
const router = express.Router();

const SiteController = require('./controller/site.js');
const SysAppController = require('./controller/sysApp.js');
const SysUserController = require('./controller/sysUser.js');
const SysRoleController = require('./controller/sysRole.js');
const SysMenuController = require('./controller/menu.js');
const LoginLogController = require('./controller/loginLog.js');

const CategoryController = require('./controller/category.js');
const ArticleController = require('./controller/article.js');
const CollectController = require('./controller/collect.js')
const ModelController = require('./controller/model.js');
const FieldController = require('./controller/field.js');
const FragController = require('./controller/frag.js');
const TagController = require('./controller/tag.js');
const FriendlinkController = require('./controller/friendlink.js');
const MessageController = require('./controller/message.js');
const SlideController = require('./controller/slide.js');
const QiniuController = require('./controller/qiniu.js');

const config = require('../../config/index.js');
const { upload, uploads } = require('../../extend/upload.js');
const SysAppService = require('./service/sysApp.js');
const auth = require('../../middleware/auth.js');

// 验证码
router.get('/captcha', SysUserController.captcha); // 验证码

// 登录
router.post('/sysUser/login', SysUserController.login);
router.get('/sysUser/list', SysUserController.list);
router.get('/sysUser/search', SysUserController.search);
router.get('/sysUser/detail', SysUserController.detail);
router.post('/sysUser/create', auth(), SysUserController.create);
router.get('/sysUser/delete', auth(), SysUserController.delete);
router.post('/sysUser/update', auth(), SysUserController.update);

// 站点信息
router.get('/site/find', auth(), SiteController.find);
router.post('/site/updateInfo', auth(), SiteController.updateInfo);
router.post('/site/updateSeo', auth(), SiteController.updateSeo);
router.get('/site/runEnv', SiteController.runEnv);
router.get('/sysApp/find', SysAppController.find);
router.get('/sysApp/views', SysAppController.getViews);
router.get('/sysApp/config', SysAppController.config);
router.post('/sysApp/update', auth(), SysAppController.update);

// 网站栏目
router.get('/category/find', CategoryController.find);
router.get('/category/findId', CategoryController.findId);
router.get('/category/findSubId', CategoryController.findSubId);
router.get('/category/search', CategoryController.search);
router.get('/category/delete', auth(), CategoryController.delete);
router.post('/category/update', auth(), CategoryController.update);
router.post('/category/create', auth(), CategoryController.create);

// 文章栏目
router.get('/article/list', ArticleController.list);
router.get('/article/tongji', ArticleController.tongji);
router.get('/article/search', ArticleController.search);
router.get('/article/detail', ArticleController.detail);
router.get('/article/findField', auth(), ArticleController.findField);
router.post('/article/create', auth(), ArticleController.create);
router.get('/article/delete', auth(), ArticleController.delete);
router.post('/article/update', auth(), ArticleController.update);
//上传
(async function() {
    let config = await SysAppService.config();
    const {uploadWay} = config;
    let uploadConfig = {
        '1': {
            type: upload.any(),
            method: ArticleController.upload,
        },
        '2': {
            type: uploads.single("file"),
            method: QiniuController.upload,
        },
    }[uploadWay];
    router.post('/upload', auth(), uploadConfig.type, uploadConfig.method);
  })();


// 模型管理
router.get('/model/list', ModelController.list);
router.get('/model/detail', ModelController.detail);
router.get('/model/hasUse', auth(), ModelController.hasUse);
router.post('/model/create', auth(), ModelController.create);
router.post('/model/delete', auth(), ModelController.delete);
router.post('/model/update', auth(), ModelController.update);

// 字段管理
router.get('/field/list', FieldController.list);
router.get('/field/detail', FieldController.detail);
router.post('/field/create', auth(), FieldController.create);
router.get('/field/delete', auth(), FieldController.delete);
router.post('/field/update', auth(), FieldController.update);

// 碎片管理
router.get('/frag/list', FragController.list);
router.get('/frag/search', FragController.search);
router.get('/frag/detail', FragController.detail);
router.post('/frag/create', auth(), FragController.create);
router.get('/frag/delete', auth(), FragController.delete);
router.post('/frag/update', auth(), FragController.update);

// tag标签管理
router.get('/tag/list', TagController.list);
router.post('/tag/create', auth(), TagController.create);
router.get('/tag/detail', TagController.detail);
router.get('/tag/has', TagController.has);
router.get('/tag/search', TagController.search);
router.get('/tag/delete', auth(), TagController.delete);
router.post('/tag/update', auth(), TagController.update);

// 友情链接
router.get('/friendlink/list', FriendlinkController.list);
router.get('/friendlink/detail', FriendlinkController.detail);
router.post('/friendlink/create', auth(), FriendlinkController.create);
router.get('/friendlink/delete', auth(), FriendlinkController.delete);
router.post('/friendlink/update', auth(), FriendlinkController.update);

// 留言管理
router.get('/message/list', MessageController.list);
router.get('/message/search', MessageController.search);
router.get('/message/detail', MessageController.detail);
router.post('/message/create',  MessageController.create);
router.get('/message/delete', auth(), MessageController.delete);
router.post('/message/update', auth(), MessageController.update);


// 轮播管理
router.get('/slide/list', SlideController.list);
router.get('/slide/search', SlideController.search);
router.get('/slide/detail', SlideController.detail);
router.post('/slide/create', auth(), SlideController.create);
router.get('/slide/delete', auth(), SlideController.delete);
router.post('/slide/update', auth(), SlideController.update);

//采集
router.post('/collect/getPages', CollectController.getPages);
router.post('/collect/getArticle', CollectController.getArticle);
router.get('/collect/list', CollectController.list);
router.get('/collect/search', CollectController.search);
router.get('/collect/detail', CollectController.detail);
router.post('/collect/create', auth(), CollectController.create);
router.get('/collect/delete', auth(), CollectController.delete);
router.post('/collect/update', auth(), CollectController.update);

// 七牛云相关
router.get('/qiniu/getUploadToken', QiniuController.getUploadToken);


//角色管理
router.get('/sysRole/list', auth(),SysRoleController.list);
router.post('/sysRole/create', auth(), SysRoleController.create);
router.get('/sysRole/delete', auth(), SysRoleController.delete);
router.post('/sysRole/update', auth(), SysRoleController.update);
router.get('/sysRole/detail',auth(), SysRoleController.detail);

//系统菜单
router.get('/sysMenu/find', auth(), SysMenuController.find);
router.post('/sysMenu/update', auth(), SysMenuController.update);

//登录日志
router.post('/loginLog/create', auth(), LoginLogController.create);
router.get('/loginLog/delete', auth(), LoginLogController.delete);
router.get('/loginLog/list', auth(),LoginLogController.list);

module.exports = router;
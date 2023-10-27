const multer = require("multer");
const dayjs = require("dayjs");
const fs = require("fs");
const path = require("path");
const { template } = require("../config/index.js");
const { mkdirsSync,filterContainChinese } = require("./helper.js");



const storage = multer.diskStorage({
  //配置上传的目录
  destination: async function (req, file, cb){
    const {config:{template}} = req.app.locals;
    // 生成格式化日期
    let date = dayjs(Date.now()).format("YYYY/MM/DD");
    // 获取目录路径
    let dir = path.join(`app/public/uploads/${template}`, date);
    // 生成目录，异步改同步
    function mkdirsSync(dirname){
      if (fs.existsSync(dirname)) {
        return true;
      } else {
        if (mkdirsSync(path.dirname(dirname))) {
          fs.mkdirSync(dirname);
          return true;
        }
      }
    };
    mkdirsSync(dir);
    cb(null, dir);
  },
  //修改上传后的文件名
  filename:  (req, file, cb) =>{
    console.log('111111',file)
    //1、获取后缀名
    let extname = path.extname(file.originalname);
    //2、根据时间戳生成文件名,过滤中文
    cb(null, Date.now() + `_origin-${filterContainChinese(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });

const uploads = multer({ dest: path.join(`app/public/uploads/${template}`) }); //本地服务文件夹
module.exports = {
  upload,
  uploads,
};

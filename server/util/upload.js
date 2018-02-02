const fs = require('fs')
const path = require('path')
const multer = require('koa-multer')

/**
 * 同步创建目录
 * @param {String}
 */
function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true
    } else if (mkdirsSync(path.dirname(dirname))) {
        fs.mkdirSync(dirname)
        return true
    }
}
/**
 * 遍历目录下的文件, 结果没用上
 */
function readDirFile(name, filedname) {
    let check_file = false;
    let nameList = [];
    if (!fs.existsSync(path.join(__dirname, '../' + 'uploads'))) {
        fs.mkdirSync(path.join(__dirname, '../' + 'uploads'))
    }
    fs.readdirSync(path.join(__dirname, '../uploads')).forEach((filename) => {
        if (filedname == filename && filename.indexOf(name) != '-1') {
            check_file = true
        }
    })
    return check_file
}
/**
 * 获取文件后缀名，后面找到了更好的方法替代，没用上
 * @param {String} filename
 */
function getStuffixName(filename) {
    let nameList = filename.split('.')
    return [nameList[0], nameList[nameList.length - 1]]
}
/**
 * 上传文件，中间件用不惯，果断fs手动读写 *-*
 * @param {object} ctx
 * @param {object} options
 */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'server/uploads')
    },
    filename: function (req, file, cb) {
        let [name, stuf_name] = getStuffixName(file.originalname)
        cb(null, req.body.mark + '_' + name + '.' + stuf_name)
    }
})

/**
 * [fileFilter 过滤重复数据] 后来找到了避免重复的方法，大爱 uuid ^_^
 * @param  {[object]} req  [请求]
 * @param  {[object]} file [文件]
 * @param  {[Function]} cb)
 * @return {[object]}      [响应]
 */
const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        let [name, stuf_name] = getStuffixName(file.originalname)
        let check_file = readDirFile(name, req.body.mark + '_' + name + '.' + stuf_name)
        cb(null, !check_file)
    }
});

module.exports = upload;
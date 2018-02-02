const fs = require('fs');
const path = require('path');

const AlowedFileType = ['.mp4', '.flv', '.webm', '.ogv', '.mpg', ".mpg", '.wav', '.ogg'];
const headTypes = {
    "mp4": "video/mp4",
    "webm": "video/webm",
    "ogg": "application/ogg",
    "ogv": "video/ogg",
    "mpg": "video/mpeg",
    "flv": "flv-application/octet-stream",
    "mp3": "audio/mpeg",
    "wav": "audio/x-wav",
};
let getContentType = (type) => {
    if (headTypes[type]) {
        return headTypes[type]
    } else {
        return null
    }
};

/**
 * 检查文件的合理性，转交给媒体流函数处理
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
module.exports.checkFile = async (ctx, next) => {
    // let filename = ctx.params.filename;
    let filename = 'howToUse.mp4'; //这里暂时把视频位置写死
    let fileExt = path.extname(filename).toLocaleLowerCase();
    let fileAbsolutePath = path.join(path.dirname(__dirname), '../static/video', filename);
    // let fileExt = path.extname(fileAbsolutePath).toLocaleLowerCase();
    if (
        fs.existsSync(fileAbsolutePath) &&
        (
            (AlowedFileType instanceof Array && AlowedFileType.indexOf(fileExt) > -1) ||
            (AlowedFileType instanceof RegExp && AlowedFileType.test(fileExt))
        )
    ) { // 判断文件是否存在,存在则解析为流
        ctx.state.fileExt = fileExt; // 将所需的参数挂载在 ctx 上
        ctx.state.fileAbsolutePath = fileAbsolutePath;
        ctx.state.fileStat = fs.statSync(fileAbsolutePath);
        next() // 转移权限
    } else {
        ctx.status = 200
        next()
    }
};

/**
 * 将 url 中的文件path处理为 fileStreaming 并返回给前台
 * @param ctx url中包含文件名称 filename
 * @param next
 * @returns {Promise<void>}
 */
module.exports.getVedioStream = async (ctx, next) => {
    let fileExt = ctx.state.fileExt;
    let fileAbsolutePath = ctx.state.fileAbsolutePath;
    let fileSize = ctx.state.fileStat.size;
    if (ctx.request.header && ctx.request.header['range']) {
        //存在媒体分片请求,将文件转化为流
        let fileRange = ctx.request.header['range'].split('=')[1]; // 获取请求文件片位置
        fileRange = fileRange.split('-');
        let fileRangeStart = Number.parseInt(fileRange[0]);
        let fileRangeEnd = fileRange[1] ? Number.parseInt(fileRange[1]) : (Number.parseInt(fileSize) - 1);
        let fileStream = fs.createReadStream(fileAbsolutePath, {
            start: fileRangeStart,
            end: fileRangeEnd
        });
        ctx.set("Content-Range", `bytes ${ fileRangeStart }-${ fileRangeEnd }/${ fileSize }`);
        ctx.set("Accept-Ranges", `bytes`);
        ctx.set('Content-Length', fileRangeEnd - fileRangeStart + 1);
        let mediaType = getContentType(fileExt.replace(".", ""));
        ctx.set('Content-Type', mediaType);
        ctx.status = 206;
        ctx.body = fileStream
    } else {
        ctx.status = 200;
        ctx.set('Content-Length', fileSize);
        ctx.set('Content-Type', 'video/mp4');
        ctx.body = fs.createReadStream(fileAbsolutePath);
    }
    next()
};
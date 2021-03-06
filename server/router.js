import Router from 'koa-router'
const multer = require('koa-multer');
const upload = multer({
    dest: './static/uploads'
});

import {
    testGetData,
    AddUser,
    addDataToDataBase,
    getOrCreateData,
    createData
} from './service/test_service'
import {
    logIn,
    checkLogIn,
    logOut,
    regist,
    getUser
} from './service/auth'
import {
    getAllDevice,
    addDevice,
    getDeviceById,
    modifyDeviceById,
    delteDeviceById,
    onluGetAllDevice,
    getDeviceByTypeId,
    deviceSearch
} from './service/device'
import {
    getAllUser,
    deleteUserById,
    getUserById,
    addUser,
    modifyUserById,
    onlyGetAllUser,
    getPersonal,
    userSearch
} from './service/user'
import {
    getAllRules,
    addRule,
    deleteRule,
    modifyRule,
    getRuleById,
    ruleSearch
} from './service/rules'
import {
    getAllMessage,
    addMessage,
    getMessageById,
    modifyMessageById,
    deletseMessageById,
    messageSearch
} from './service/message'
import {
    getAllApply,
    addApply,
    getApplyById,
    modifyApplyById,
    deleteApplyById,
    addApplyFront,
    applySearch
} from './service/apply'
import {
    imageUploadToTemp,
    deleteTempFile,
    copyTempFileToDir
} from './service/upload'
import {
    checkFile,
    getVedioStream
} from './service/video'


/**
 * 全局 service router 定义
 */
module.exports = () => {

    const router = new Router({
        prefix: '/api'
    });

    router.get('/test', testGetData);
    router.get('/initDataBase', createData);

    // 权限相关
    router.post('/auth/login', logIn);
    router.post('/auth/regist', regist)
    router.get('/auth/checkLogin', checkLogIn);
    router.get('/auth/logOut', logOut);
    router.get('/auth/user', getUser)


    // 设备管理相关
    router.get('/device/getAll/:page?', getAllDevice);
    router.get('/device/onlyAll', onluGetAllDevice);
    router.post('/device/add', addDevice);
    router.post('/device/getById', getDeviceById);
    router.post('/device/modifyById', modifyDeviceById);
    router.post('/device/deleteById', delteDeviceById);
    router.post('/device/getDeviceByTypeId', getDeviceByTypeId);
    router.post('/device/search', deviceSearch);

    // 人员管理相关
    router.get('/user/getAll/:page?', getAllUser);
    router.get('/user/onlyAll', onlyGetAllUser);
    router.post('/user/add', addUser);
    router.post('/user/getById', getUserById);
    router.post('/user/modifyById', modifyUserById);
    router.post('/user/deleteById', deleteUserById);
    router.post('/user/getPersonal', getPersonal)
    router.post('/user/search', userSearch)

    // 公告管理相关
    router.get('/rule/getAll/:page?', getAllRules);
    router.post('/rule/add', addRule);
    router.post('/rule/getById', getRuleById);
    router.post('/rule/modifyById', modifyRule);
    router.post('/rule/deleteById', deleteRule);
    router.post('/rule/search', ruleSearch);

    // 消息管理相关
    router.get('/message/getAll/:page?', getAllMessage);
    router.post('/message/add', addMessage);
    router.post('/message/getById', getMessageById);
    router.post('/message/modifyById', modifyMessageById);
    router.post('/message/deleteById', deletseMessageById);
    router.post('/message/search', messageSearch)

    // 预约申请管理
    router.get('/apply/getAll/:page?', getAllApply);
    router.post('/apply/add', addApply);
    router.post('/apply/getById', getApplyById);
    router.post('/apply/modifyById', modifyApplyById);
    router.post('/apply/deleteById', deleteApplyById);
    router.post('/apply/addApplyFront', addApplyFront)
    router.post('/apply/search', applySearch)

    // 处理图片上传
    router.post('/upload/imageUpload', upload.single('file'), imageUploadToTemp);
    router.post('/upload/deleteTempFile', deleteTempFile);
    router.post('/upload/copyTempFileToDir', copyTempFileToDir);

    // 处理视频流
    router.get('/video/getStream', checkFile, getVedioStream);

    return router
};
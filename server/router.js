import Router from 'koa-router'

import { testGetData, AddUser, addDataToDataBase, getOrCreateData, createData } from './service/test_service'
import { logIn }from './service/user'
import { getAllDevice, addDevice, getDeviceById, modifyDeviceById, delteDeviceById } from './service/device'
import { getAllUser, deleteUserById, getUserById, addUser, modifyUserById, onlyGetAllUser } from './service/user'
import { getAllRules, addRule, deleteRule, modifyRule, getRuleById } from './service/rules'
import { getAllMessage,addMessage, getMessageById, modifyMessageById, deletseMessageById } from './service/message'

/**
 * 全局 service router 定义
 */
module.exports = () => {

    const router = new Router({
        prefix: '/api'
    });

    router.get( '/test', testGetData );
    router.get( '/initDataBase', createData );

    // 权限相关
    router.post('/user/login', logIn );


    // 设备管理相关
    router.get( '/device/getAll', getAllDevice );
    router.post( '/device/add', addDevice );
    router.post( '/device/getById', getDeviceById );
    router.post( '/device/modifyById', modifyDeviceById );
    router.post( '/device/deleteById', delteDeviceById );

    // 人员管理相关
    router.get('/user/getAll', getAllUser );
    router.get('/user/onlyAll', onlyGetAllUser );
    router.post('/user/add', addUser );
    router.post('/user/getById', getUserById );
    router.post('/user/modifyById', modifyUserById );
    router.post('/user/deleteById', deleteUserById );

    // 公告管理相关
    router.get('/rule/getAll', getAllRules );
    router.post('/rule/add', addRule );
    router.post('/rule/getById', getRuleById );
    router.post('/rule/modifyById', modifyRule );
    router.post('/rule/deleteById', deleteRule );

    // 消息管理相关
    router.get('/message/getAll', getAllMessage );
    router.post('/message/add', addMessage );
    router.post('/message/getById', getMessageById );
    router.post('/message/modifyById', modifyMessageById );
    router.post('/message/deleteById', deletseMessageById );

    return router
};

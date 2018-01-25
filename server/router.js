import Router from 'koa-router'
import { testGetData, AddUser, addDataToDataBase, getOrCreateData, createData } from './service/test_service'
import { logIn }from './service/user'
import { getAllDevice, addDevice, getDeviceById, modifyDeviceById } from './service/device'
import { getAllUser } from './service/user'
/**
 * 全局 service router 定义
 */
module.exports = () => {
    const router = new Router({
        prefix: '/api'
    })

    router.get( '/test', testGetData )
    router.get( '/initDataBase', createData )
    router.post('/user/login', logIn )



    router.get('/device/getAll', getAllDevice )
    router.post('/device/add', addDevice )
    router.post('/device/getById', getDeviceById )
    router.post('/device/modifyById', modifyDeviceById )

    router.get('/user/getAll', getAllUser )
    return router
}
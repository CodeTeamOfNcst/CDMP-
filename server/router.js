import Router from 'koa-router'
import { testGetData, AddUser, addDataToDataBase, getOrCreateData, createData } from './service/test_service'


/**
 * 全局 service router 定义
 */
module.exports = () => {
    const router = new Router({
        prefix: '/api'
    })

    router.get( '/test', testGetData )
    router.get( '/initDataBase', createData )

    return router
}
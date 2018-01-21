import Router from 'koa-router'
import { testGetData } from './service/test_service'


/**
 * 全局 service router 定义
 */
module.exports = () => {
    const router = new Router({
        prefix: '/api'
    })
    router.get('/test', testGetData)

    return router
}
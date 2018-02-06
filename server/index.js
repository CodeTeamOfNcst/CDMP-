import Koa from 'koa'
import {
    Nuxt,
    Builder
} from 'nuxt'
import Assert from 'assert'
import Cors from 'koa2-cors'

const path = require('path')
const logger = require('koa-logger')
const koaStatic = require('koa-static')
const session = require('koa2-session-store')
const bodyParser = require('koa-bodyparser')

const database = require('./dbconfig/dbinit')
const router = require('./router')()

async function start() {
    const app = new Koa()
    const host =  process.env.HOST || '127.0.0.1';
    const port =  process.env.PORT || 3000;
    app.keys = ['dsadasdsada*-*/*-/sda*-d/as*-d/w21*-/31-*sda-d*'];
    /**
     ** Test connecton
     */
    try {
        await database.sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (err) {
        console.error('Unable to connect to the database', err)
        Assert.ok(false, 'Unable to connect to the database')
    }


    if (process.env.NODE_ENV === "development") {
        /**
         ** Sync DB
         */
        // await database.sequelize.sync()
        // console.log("Database Sync successfully")
    }
    // init middleware
    app.use(logger())
    app.use(Cors()) //允许跨域访问
    app.use(bodyParser())
    app.use(session({
        name: "sessid",
        secret: "*2-131/*-",
        cookie: {
            maxAge: 23333 // just example
        }
    }));
    
    app.use(koaStatic(__dirname + '/uploads'))
    app.use(router.routes()).use(router.allowedMethods())
    
    // Import and Set Nuxt.js options
    let config = require('../nuxt.config.js')
    config.dev = !(app.env === 'production')

    // Instantiate nuxt.js
    const nuxt = new Nuxt(config)
    
    // Build in development
    if (config.dev) {
        const builder = new Builder(nuxt)
        await new Builder(nuxt).build()
    }
    
    app.use(async (ctx, next) => {
        await next()
        ctx.status = 200 // koa defaults to 404 when it sees that status is unset
        return new Promise((resolve, reject) => {
            ctx.res.on('close', resolve)
            ctx.res.on('finish', resolve)
            nuxt.render(ctx.req, ctx.res, promise => {
                // nuxt.render passes a rejected promise into callback on error.
                promise.then(resolve).catch(reject)
            })
        })
    })

    app.listen(port, host)
    console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}
start()
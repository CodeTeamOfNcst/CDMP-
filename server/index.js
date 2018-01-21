import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import assert from 'assert'
const path = require('path')
const logger = require('koa-logger')
const koaStatic = require('koa-static')
const session = require('koa-session')
const bodyParser = require('koa-bodyparser')

const database = require('./dbconfig/dbinit')

async function start () {
  const app = new Koa()
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 3000
  const SESSION_CONFIG = {key: 'koa:sess', maxAge: 86400000,overwrite: true, httpOnly: true, signed: true, rolling: false}
  /**
  ** Test connecton
  */
  try{
    await database.sequelize.authenticate()
    console.log('Connection has been established successfully.')
  }catch(err){
    console.error('Unable to connect to the database', err)
    assert.ok(false, 'Unable to connect to the database')
  }
 
  
  if(process.env.NODE_ENV === "development"){
    /**
     ** Sync DB
    */
    try{
      await database.sequelize.sync()
      console.log("Database Sync successfully")
    }catch (err) {
      console.error("Unable To Sync Database", err)
      assert.ok(false,"Unable To Sync Database")
    }
  }
  // init middleware 
  app.use(logger())
  app.use(bodyParser())
  app.use(session(SESSION_CONFIG, app));
  app.use(koaStatic(__dirname + '/uploads'))

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
require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

var path = __webpack_require__(1);
var sequelize = __webpack_require__(11);

var Apply = sequelize.import('../server/models/Apply');
var Device = sequelize.import('../server/models/Device');
var DeviceType = sequelize.import('../server/models/DeviceType');
var Message = sequelize.import('../server/models/Message');
var MessageKlass = sequelize.import('../server/models/MessageKlass');
var Rule = sequelize.import('../server/models/Rule');
var User = sequelize.import('../server/models/User');
var UserKlass = sequelize.import('../server/models/UserKlass');

Message.belongsTo(MessageKlass, { as: "messageType" });
User.belongsTo(UserKlass, { as: "userType" });
Device.belongsTo(DeviceType, { as: "deviceType" });
Apply.belongsTo(User, { as: "applyer" });
Apply.belongsTo(Device, { as: "applyDevice" });

module.exports = {
    Apply: Apply,
    Device: Device,
    DeviceType: DeviceType,
    Message: Message,
    MessageKlass: MessageKlass,
    Rule: Rule,
    User: User,
    UserKlass: UserKlass,

    sequelize: sequelize
};

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css', 'element-ui/lib/theme-chalk/index.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /**
  ** 防止重复打包
  */
  build: {
    vendor: ['axios', 'element-ui']
  },
  /**
  ** 添加插件
  */
  plugins: ['~plugins/element-ui']
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

var databases = __webpack_require__(0);

var User = __webpack_require__(0).User;

var test = function test() {
    User.create({ account: 'admin', password: '123456', name: 'admin' });
    console.log("success");
};

module.exports.test = test;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("koa-logger");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("koa-session");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("koa-static");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);


// 工作室服务器环境
// const DATABASE = 'cdmp'
// const USERNAME = 'root'
// const PASSWORD = '123456'
// const DBHOST = '10.55.91.107'

// 本地服务器环境

var DATABASE = 'cdmp';
var USERNAME = 'root';
var PASSWORD = '123456';
var DBHOST = '127.0.0.1';

var sequelize = new __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a(DATABASE, USERNAME, PASSWORD, {
    host: DBHOST,
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 10,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("sequelize");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_zhanglingxue_Desktop_CDMP_node_modules_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_zhanglingxue_Desktop_CDMP_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Users_zhanglingxue_Desktop_CDMP_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_zhanglingxue_Desktop_CDMP_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
    var _this = this;

    var app, host, port, config, nuxt, builder;
    return __WEBPACK_IMPORTED_MODULE_0_C_Users_zhanglingxue_Desktop_CDMP_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            host = process.env.HOST || '127.0.0.1';
            port = process.env.PORT || 3000;

            if (false) {
              _context2.next = 13;
              break;
            }

            _context2.prev = 4;
            _context2.next = 7;
            return database.sequelize.sync();

          case 7:
            console.log("Database Sync successfully");
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2['catch'](4);

            console.error("Unable To Sync Database", _context2.t0);

          case 13:
            // init middleware 
            app.use(logger());
            app.use(bodyParser());
            app.use(koaStatic(__dirname + '/uploads'));

            // Import and Set Nuxt.js options
            config = __webpack_require__(2);

            config.dev = !(app.env === 'production');

            // Instantiate nuxt.js
            nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);

            // Build in development

            if (!config.dev) {
              _context2.next = 23;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
            _context2.next = 23;
            return new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt).build();

          case 23:

            app.use(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_zhanglingxue_Desktop_CDMP_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0_C_Users_zhanglingxue_Desktop_CDMP_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return next();

                      case 2:
                        ctx.status = 200; // koa defaults to 404 when it sees that status is unset
                        return _context.abrupt('return', new Promise(function (resolve, reject) {
                          ctx.res.on('close', resolve);
                          ctx.res.on('finish', resolve);
                          nuxt.render(ctx.req, ctx.res, function (promise) {
                            // nuxt.render passes a rejected promise into callback on error.
                            promise.then(resolve).catch(reject);
                          });
                        }));

                      case 4:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());

            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

          case 26:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[4, 10]]);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var path = __webpack_require__(1);
var logger = __webpack_require__(7);
var koaStatic = __webpack_require__(9);
var koaSession = __webpack_require__(8);
var bodyParser = __webpack_require__(6);

var database = __webpack_require__(0);

/**
** Test connecton
*/
database.sequelize.authenticate().then(function () {
  console.log('Connection has been established successfully.');
}).catch(function (err) {
  console.error('Unable to connect to the database', err);
});

if (true) {

  /**
   ** Test
  */
  var test = __webpack_require__(3);
  test.test();
}

start();
/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ }
/******/ ]);
//# sourceMappingURL=main.map
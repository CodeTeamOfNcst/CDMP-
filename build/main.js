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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

var path = __webpack_require__(2);
var sequelize = __webpack_require__(15);

// 这边后期应该加上啊循环自动导入model，先放着
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
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("sequelize");

/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_test_service__ = __webpack_require__(16);



/**
 * 全局 service router 定义
 */
module.exports = function () {
    var router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a({
        prefix: '/api'
    });

    router.get('/test', __WEBPACK_IMPORTED_MODULE_1__service_test_service__["testGetData"]);
    router.get('/initDataBase', __WEBPACK_IMPORTED_MODULE_1__service_test_service__["getOrCreateData"]);

    return router;
};

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("assert");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("koa-logger");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("koa-session");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("koa-static");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("koa2-cors");

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 14 */
/***/ function(module, exports) {

/*global require: true, provide: true */
(function () {
  "use strict";
  /*jslint onevar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, strict: true */

  /** ES5 ISO Date Parser Plus toISOString Method
   * @author          Andrea Giammarchi
   * @blog            WebReflection
   * @version         2009-07-04T11:36:25.123Z
   * @compatibility   Chrome, Firefox, IE 5+, Opera, Safari, WebKit, Others
   */

  function debug(matches) {
    matches.forEach(function (match, i) {
      console.log(i, match);
    });
  }

  function ISO(datestring) {
                    //    1        3        5        7       8       10     12        13   15     16      17
                    // yyyy   -   mm   -   dd  'T'  HH  :   MM   :   ss    .ms       'Z'  +/-     HH  :   MM 
                    //        ?        ?        ?                ?         ?
      var pattern = /^(\d{4})(-(\d{2})(-(\d{2})(T(\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|((\+|-)(\d{2}):(\d{2}))))?)?)?$/,
        match = pattern.exec(datestring),
        date = new Date(),
        hour,
        minute,
        aheadOfUtc;

      if(null === match) {
        return false;
        // throw new Error("Invalid ISO String");
      }

      //debug(match);

      // The bit-shifting is shorthand for `Number(m) || 0`
      date.setUTCFullYear(match[1] >> 0);
      date.setUTCMonth(match[3] ? (match[3] >> 0) - 1 : 0);
      date.setUTCDate(match[5] >> 0);
      date.setUTCHours(match[7] >> 0);
      date.setUTCMinutes(match[8] >> 0);
      date.setUTCSeconds(match[10] >> 0);
      date.setUTCMilliseconds(match[12] >> 0);

      // Adjust to UTC offset
      if (match[13] && match[13] !== "Z") {
        hour = match[16] >> 0;
        minute = match[17] >> 0;
        aheadOfUtc = (match[15] === "+");

        hour = hour * 60 * 60 * 1000;
        minute = minute * 60 * 1000;

        if (aheadOfUtc) {
          hour = -hour;
          minute = -minute;
        }

        // easy dateline wrapping
        date = new Date(date.valueOf() + hour + minute);
      }
      return date;
  }

  function padHour2(i) {
    return (i < 10) ? ("0" + i) : i;
  }

  function padMs3(i) {
    if (i.length < 2) {
      return "00" + i;
    }

    if (i.length < 3) {
      return "0" + i;
    }

    if  (3 < i.length)  {
      return Math.round(i / Math.pow(10, i.length - 3));
    }

    return i;
    // return i.length < 2 ? "00" + i : i.length < 3 ? "0" + i : 3 < i.length ? Math.round(i / Math.pow(10, i.length - 3)) : i
  }

  function toISOString () {
    return [
      this.getUTCFullYear(), "-",
      padHour2(this.getUTCMonth() + 1), "-",
      padHour2(this.getUTCDate()), "T",
      padHour2(this.getUTCHours()), ":",
      padHour2(this.getUTCMinutes()), ":",
      padHour2(this.getUTCSeconds()), ".",
      padMs3(String(this.getUTCMilliseconds())), "Z"
    ].join("");
  }


  // Do nothing if this interpretor is es5 ready
  // otherwise, add es5 functionality

  if (!Date.ISO) {
    Date.ISO = ISO;
  }

  if (!Date.prototype.toISOString) {
    Date.prototype.toISOString = Date.prototype.toISOString || toISOString;
  }

}());


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);


// 工作室服务器环境
// const DATABASE = 'cdmp'
// const USERNAME = 'root'
// const PASSWORD = '123456'
// const DBHOST = '10.55.91.107'

// 本地服务器环境

var DATABASE = 'cdmp';
var USERNAME = 'root';
var PASSWORD = 'admin';
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sequelize__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Date__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_Date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_modelFns__ = __webpack_require__(21);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






module.exports.testGetData = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                        while (1) {
                                switch (_context.prev = _context.next) {
                                        case 0:
                                                ctx.body = {
                                                        status: 1,
                                                        message: 'Get Data From Test Get'
                                                };

                                        case 1:
                                        case 'end':
                                                return _context.stop();
                                }
                        }
                }, _callee, _this);
        }));

        return function (_x, _x2) {
                return _ref.apply(this, arguments);
        };
}();
module.exports.AddUser = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                        while (1) {
                                switch (_context2.prev = _context2.next) {
                                        case 0:
                                        case 'end':
                                                return _context2.stop();
                                }
                        }
                }, _callee2, _this);
        }));

        return function (_x3, _x4) {
                return _ref2.apply(this, arguments);
        };
}();

module.exports.addDataToDataBase = function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
                var admin, commonUser, badGay, user1, user2, user3, rule1, rule2, rule3, successMessageType, commonMessageType, failMessageType, successMessage, commonMessage, failMessage, computerDeviceType, chemicalDeviceType, metallurgicalDeviceType, device1, device2, device3, apply1, apply2, apply3;
                return __WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                        while (1) {
                                switch (_context3.prev = _context3.next) {
                                        case 0:
                                                _context3.next = 2;
                                                return __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["UserKlass"].findOrCreate({ where: { name: '管理员' } })[0];

                                        case 2:
                                                admin = _context3.sent;
                                                _context3.next = 5;
                                                return __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["UserKlass"].findOrCreate({ where: { name: '用户' } })[0];

                                        case 5:
                                                commonUser = _context3.sent;
                                                _context3.next = 8;
                                                return __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["UserKlass"].findOrCreate({ where: { name: '关系用户' } })[0];

                                        case 8:
                                                badGay = _context3.sent;
                                                _context3.next = 11;
                                                return __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["User"].findOrCreate({ where: { account: 'haoyiqing', password: '123456', name: '郝一擎', email: '1337074512@qq.com', userType: admin } })[0];

                                        case 11:
                                                user1 = _context3.sent;
                                                _context3.next = 14;
                                                return __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["User"].findOrCreate({ where: { account: 'zhanglingxue', password: '123456', name: '张凌雪', email: 'zhanglingxue@qq.com', userType: commonUser } })[0];

                                        case 14:
                                                user2 = _context3.sent;
                                                _context3.next = 17;
                                                return __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["User"].findOrCreate({ where: { account: 'wangyangyang', password: '123456', name: '王洋洋', email: 'wangyangyang@qq.com', userType: badGay } })[0];

                                        case 17:
                                                user3 = _context3.sent;
                                                _context3.next = 20;
                                                return __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Rule"].findOrCreate({ where: { content: '第一条公告', title: '第一条公告' } })[0];

                                        case 20:
                                                rule1 = _context3.sent;
                                                _context3.next = 23;
                                                return __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Rule"].findOrCreate({ where: { content: '第二条公告', title: '第二条公告' } })[0];

                                        case 23:
                                                rule2 = _context3.sent;
                                                _context3.next = 26;
                                                return __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Rule"].findOrCreate({ where: { content: '第三条公告', title: '第三条公告' } })[0];

                                        case 26:
                                                rule3 = _context3.sent;
                                                successMessageType = __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["MessageKlass"].findOrCreate({ where: { name: '成功' } })[0];
                                                commonMessageType = __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["MessageKlass"].findOrCreate({ where: { name: '普通消息' } })[0];
                                                failMessageType = __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["MessageKlass"].findOrCreate({ where: { name: '失败消息' } })[0];
                                                successMessage = __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Message"].findOrCreate({ where: { content: '这是一条成功的消息', isPublished: false, isRead: false, deviceType: successMessageType } })[0];
                                                commonMessage = __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Message"].findOrCreate({ where: { content: '这是一条普通的消息', isPublished: false, isRead: false, deviceType: commonMessageType } })[0];
                                                failMessage = __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Message"].findOrCreate({ where: { content: '这是一条失败的消息', isPublished: false, isRead: false, deviceType: failMessageType } })[0];
                                                computerDeviceType = __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["DeviceType"].findOrCreate({ where: { name: '计算机系' } })[0];
                                                chemicalDeviceType = __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["DeviceType"].findOrCreate({ where: { name: '化学系' } })[0];
                                                metallurgicalDeviceType = __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["DeviceType"].findOrCreate({ where: { name: '冶金系' } })[0];
                                                device1 = __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Device"].findOrCreate({ where: { name: '计算机系的仪器', description: '这是计算机系的仪器', deviceType: computerDeviceType, imgFilePath: '/upload/device/device1' } })[0];
                                                device2 = __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Device"].findOrCreate({ where: { name: '化工系的仪器', description: '这是化工系的仪器', deviceType: chemicalDeviceType, imgFilePath: '/upload/device/device2' } })[0];
                                                device3 = __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Device"].findOrCreate({ where: { name: '冶金系的仪器', description: '这是冶金系的仪器', deviceType: metallurgicalDeviceType, imgFilePath: '/upload/device/device3' } })[0];
                                                apply1 = __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Apply"].findOrCreate({ where: { vioReason: 'user1 想要用计算机系的仪器', applyer: user1, applyDevice: device1 } })[0];
                                                apply2 = __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Apply"].findOrCreate({ where: { vioReason: 'user2 想要用化学系的仪器', applyer: user2, applyDevice: device2 } })[0];
                                                apply3 = __WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Apply"].findOrCreate({ where: { vioReason: 'user3 想要用冶金系的仪器', applyer: user3, applyDevice: device2 } })[0];


                                                ctx.body = {
                                                        message: 'success!'
                                                };

                                        case 43:
                                        case 'end':
                                                return _context3.stop();
                                }
                        }
                }, _callee3, _this);
        }));

        return function (_x5, _x6) {
                return _ref3.apply(this, arguments);
        };
}();

exports.getOrCreateData = function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx, next) {
                var admin, commonUser, badGay, user1, user2, user3, rule1, rule2, rule3, successMessageType, commonMessageType, failMessageType, successMessage, commonMessage, failMessage, computerDeviceType, chemicalDeviceType, metallurgicalDeviceType, device1, device2, device3, apply1, apply2, apply3;
                return __WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
                        while (1) {
                                switch (_context4.prev = _context4.next) {
                                        case 0:
                                                _context4.next = 2;
                                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["UserKlass"], { name: '管理员' });

                                        case 2:
                                                admin = _context4.sent;
                                                _context4.next = 5;
                                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["UserKlass"], { name: '用户' });

                                        case 5:
                                                commonUser = _context4.sent;
                                                _context4.next = 8;
                                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["UserKlass"], { name: '关系用户' });

                                        case 8:
                                                badGay = _context4.sent;
                                                _context4.next = 11;
                                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["User"], { account: 'haoyiqing', password: '123456', name: '郝一擎', email: '1337074512@qq.com', userType: admin });

                                        case 11:
                                                user1 = _context4.sent;
                                                _context4.next = 14;
                                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["User"], { account: 'zhanglingxue', password: '123456', name: '张凌雪', email: 'zhanglingxue@qq.com', userType: commonUser });

                                        case 14:
                                                user2 = _context4.sent;
                                                _context4.next = 17;
                                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["User"], { account: 'wangyangyang', password: '123456', name: '王洋洋', email: 'wangyangyang@qq.com', userType: badGay });

                                        case 17:
                                                user3 = _context4.sent;
                                                _context4.next = 20;
                                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Rule"], { content: '第一条公告', title: '第一条公告' });

                                        case 20:
                                                rule1 = _context4.sent;
                                                _context4.next = 23;
                                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Rule"], { content: '第二条公告', title: '第二条公告' });

                                        case 23:
                                                rule2 = _context4.sent;
                                                _context4.next = 26;
                                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Rule"], { content: '第三条公告', title: '第三条公告' });

                                        case 26:
                                                rule3 = _context4.sent;
                                                successMessageType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["MessageKlass"], { name: '成功' });
                                                commonMessageType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["MessageKlass"], { name: '普通消息' });
                                                failMessageType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["MessageKlass"], { name: '失败消息' });
                                                successMessage = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Message"], { content: '这是一条成功的消息', isPublished: false, isRead: false, deviceType: successMessageType });
                                                commonMessage = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Message"], { content: '这是一条普通的消息', isPublished: false, isRead: false, deviceType: commonMessageType });
                                                failMessage = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Message"], { content: '这是一条失败的消息', isPublished: false, isRead: false, deviceType: failMessageType });
                                                computerDeviceType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["DeviceType"], { name: '计算机系' });
                                                chemicalDeviceType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["DeviceType"], { name: '化学系' });
                                                metallurgicalDeviceType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["DeviceType"], { name: '冶金系' });
                                                device1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Device"], { name: '计算机系的仪器', description: '这是计算机系的仪器', deviceType: computerDeviceType, imgFilePath: '/upload/device/device1' });
                                                device2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Device"], { name: '化工系的仪器', description: '这是化工系的仪器', deviceType: chemicalDeviceType, imgFilePath: '/upload/device/device2' });
                                                device3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Device"], { name: '冶金系的仪器', description: '这是冶金系的仪器', deviceType: metallurgicalDeviceType, imgFilePath: '/upload/device/device3' });
                                                apply1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Apply"], { vioReason: 'user1 想要用计算机系的仪器', applyer: user1, applyDevice: device1 });
                                                apply2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Apply"], { vioReason: 'user2 想要用化学系的仪器', applyer: user2, applyDevice: device2 });
                                                apply3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_modelFns__["getOrCreate"])(__WEBPACK_IMPORTED_MODULE_1__dbconfig_dbinit__["Apply"], { vioReason: 'user3 想要用冶金系的仪器', applyer: user3, applyDevice: device2 });


                                                ctx.body = {
                                                        message: 'success!'
                                                };

                                        case 43:
                                        case 'end':
                                                return _context4.stop();
                                }
                        }
                }, _callee4, _this);
        }));

        return function (_x7, _x8) {
                return _ref4.apply(this, arguments);
        };
}();

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_assert__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_assert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_assert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa2_cors__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa2_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa2_cors__);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
    var _this = this;

    var app, host, port, SESSION_CONFIG, config, nuxt, builder;
    return __WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            host = process.env.HOST || '127.0.0.1';
            port = process.env.PORT || 3000;
            SESSION_CONFIG = { key: 'koa:sess', maxAge: 86400000, overwrite: true, httpOnly: true, signed: true, rolling: false
              /**
              ** Test connecton
              */
            };
            _context2.prev = 4;
            _context2.next = 7;
            return database.sequelize.authenticate();

          case 7:
            console.log('Connection has been established successfully.');
            _context2.next = 14;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2['catch'](4);

            console.error('Unable to connect to the database', _context2.t0);
            __WEBPACK_IMPORTED_MODULE_3_assert___default.a.ok(false, 'Unable to connect to the database');

          case 14:
            if (false) {
              _context2.next = 18;
              break;
            }

            _context2.next = 17;
            return database.sequelize.sync({ force: true });

          case 17:
            console.log("Database Sync successfully");

          case 18:
            // init middleware 
            app.use(logger());
            app.use(bodyParser());
            app.use(session(SESSION_CONFIG, app));
            app.use(koaStatic(__dirname + '/uploads'));
            app.use(__WEBPACK_IMPORTED_MODULE_4_koa2_cors___default()()); //允许跨域访问
            app.use(router.routes()).use(router.allowedMethods());

            // Import and Set Nuxt.js options
            config = __webpack_require__(4);

            config.dev = !(app.env === 'production');

            // Instantiate nuxt.js
            nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);

            // Build in development

            if (!config.dev) {
              _context2.next = 31;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
            _context2.next = 31;
            return new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt).build();

          case 31:

            app.use(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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

          case 34:
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






var path = __webpack_require__(2);
var logger = __webpack_require__(9);
var koaStatic = __webpack_require__(11);
var session = __webpack_require__(10);
var bodyParser = __webpack_require__(8);

var database = __webpack_require__(0);
var router = __webpack_require__(5)();

start();
/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sequelize__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sequelize__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/**
 * 查询对应的 model， 若不存在则创建
 * @param { [object] } Model 需要操作的模型
 * @param { [json] } Condition 查询条件，不存在则直接为创建条件
 */
exports.getOrCreate = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(Model, Condition) {
        return __WEBPACK_IMPORTED_MODULE_0_C_Users_Admin_Desktop_CDMP_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return Model.findOne({ where: Condition }, include);

                    case 3:
                        return _context.abrupt('return', _context.sent);

                    case 6:
                        _context.prev = 6;
                        _context.t0 = _context['catch'](0);

                        console.err('Model entity doesn\'t exist', _context.t0);
                        _context.next = 11;
                        return Model.create(Condition);

                    case 11:
                        return _context.abrupt('return', _context.sent);

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this, [[0, 6]]);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map
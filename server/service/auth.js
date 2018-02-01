import {
    User,
    UserKlass
} from '../dbconfig/dbinit'

exports.logIn = async (ctx, next) => {

    let account = ctx.request.body.account;
    let password = ctx.request.body.passwd;
    let user = await User.findOne({
        where: {
            account: account
        }
    });
    if (user && user.password === password) {
        ctx.session.user_account = account;
        ctx.body = {
            status: 1,
            message: '登陆成功'
        }
    } else {
        if (user) {
            ctx.body = {
                status: 0,
                message: '用户名或密码错误'
            }
        } else {
            ctx.body = {
                status: 0,
                message: '请求异常'
            }
        }
    }
    next()
};

exports.logOut = async (ctx, next) => {
    if (ctx.session.user_account) {
        ctx.session.user_account = null;
        ctx.bdoy = {
            status: 1,
            message: '普通用户注销成功'
        }
    } else {
        ctx.body = {
            status: 0,
            message: '异常，用户cookie不存在'
        }
    }
};

exports.adminLogIn = async (ctx, next) => {
    next()
};

exports.adminLogOut = async (ctx, next) => {

};

exports.checkLogIn = async (ctx, next) => {
    next()
};

exports.checkAdminLogIn = async (ctx, next) => {
    next()
};
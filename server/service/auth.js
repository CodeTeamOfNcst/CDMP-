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
    let userType = await user.getUserType()
    let userIsAdmin = false
    if(userType.id === 1){
        userIsAdmin = true
    }else{
        userIsAdmin = false
    }
    if (user && user.password === password) {
        ctx.session.user_account = account;
        ctx.body = {
            user_is_admin: userIsAdmin,
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


exports.checkLogIn = async (ctx, next) => {
    console.log(ctx.session.user_account)
    if(ctx.session.user_account){
        let user = await User.findOne({
            where: {account: ctx.session.user_account}
        })
        ctx.bdoy = {
            user: user,
            status: 1,
            message: '用户已经登陆'
        }
    }else{
        ctx.body = {
            status: 0,
            message: "用户暂未登陆"
        }
    }
};

exports.regist =  async (ctx, next) => {
    let userAccount = ctx.request.body.account
    let userPasswd = ctx.request.body.passwd
    let thisUser = await User.findOne({account: userAccount})
    if(thisUser){
        ctx.body = {
            status :0,
            message: "用户已经存在"
        }
    }else{
        let thisUser = await User.create({
            account: userAccount,
            password: userPasswd
        })

        ctx.body = {
            user: thisUser,
            status: 1,
            message: "创建成功"
        }
    }
}

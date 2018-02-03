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
        let userType = await user.getUserType()
        let userIsAdmin = false
        if(userType.id === 1){
            userIsAdmin = true
        }else{
            userIsAdmin = false
        }
        ctx.cookies.set("authUser", user.account)
        ctx.body = {
            user: user,
            user_is_admin: userIsAdmin,
            status: 1,
            message: '登陆成功'
        }
    } else {
        ctx.body = {
            status: 0,
            message: '用户名或密码错误'
        }
    }
};

exports.logOut = async (ctx, next) => {
    if (ctx.cookies.get("authUser")) {
        ctx.cookies.set("authUser",'')
        ctx.bdoy = {
            status: 1,
            message: '用户注销成功'
        }
    } else {
        ctx.body = {
            status: 0,
            message: '异常，用户不存在'
        }
    }
};


exports.checkLogIn = async (ctx, next) => {
    console.log(ctx.cookies.get("authUser"))
    if(ctx.cookies.get("authUser")){
        let user = await User.findOne({
            where: { account: ctx.cookies.get("authUser") }
        })
        let userType = await user.getUserType()
        let user_is_admin = userType.id === 1? true: false
        ctx.bdoy = {
            user: user,
            user_is_admin: user_is_admin,
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
    let thisUser = await User.findOne({ where:{account: userAccount}})
    console.log(thisUser)
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

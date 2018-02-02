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
        ctx.session.user_account = account;
        ctx.cookies.set("account", account)
        ctx.body = {
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
    if (ctx.session.user_account) {
        ctx.session['user_account'] = ''
        ctx.cookies.set("account",'')
        ctx.bdoy = {
            status: 1,
            message: '用户注销成功'
        }
    } else {
        ctx.body = {
            status: 1,
            message: '异常，用户cookie不存在'
        }
    }
};


exports.checkLogIn = async (ctx, next) => {
    console.log(ctx.cookies.get("account"))
    if(ctx.cookies.get("account")){
        let user = await User.findOne({
            where: { account: ctx.cookies.get("account") }
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
    console.log(userAccount)
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
        ctx.session.user_account = userAccount;
        ctx.body = {
            user: thisUser,
            status: 1,
            message: "创建成功"
        }
    }
}

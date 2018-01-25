import { sequelize, User, UserKlass } from '../dbconfig/dbinit'

exports.logIn = async ( ctx, next ) => {
    let account = ctx.request.body.account
    let password = ctx.request.body.passwd

    let user = await User.findOne({where:{ account:account }})
    if(user && user.password === password){
        ctx.session.user_account = account
        ctx.body = {
            status: 1,
            message: '登陆成功'
        }
    }else {
        if(user){
            ctx.body = {
                status: 0,
                message: '用户名或密码错误'
            }
        }else {
            ctx.body = {
                status: 0,
                message: '请求异常'
            }
        }
    }
}

exports.logOut = async ( ctx, next ) => {

}

exports.adminLogIn = async ( ctx, next ) => {

}

exports.getAllUser = async ( ctx, next ) => {

    let Users = await User.findAll()
    console.log(Users)
    let UserKlasses = await  UserKlass.findAll()
    let UserKlassDetail = []
    for(let i = 0; i < UserKlasses.length ; i++ ){
        UserKlassDetail.push({
                name: UserKlasses[i].name
        })
    }
    let UsersDetail = []
    for(let i = 0; i < Users.length; i ++ ){
        UsersDetail.push({
            id: Users[i].id,
            name: Users[i].name,
            account: Users[i].account ? Users[i].account : '尚未填写',
            email: Users[i].email ? Users[i].email :  '尚未填写',
            phone: Users[i].phone ? Users[i].phone :  '尚未填写',
            klass: UserKlasses[ Users[i].user_type - 1 ].name,
            isUse: Users[i].isUse ? '可用': '禁用'
        })
    }
    ctx.body = {
        tableData: UsersDetail,
        userKlasses: UserKlassDetail
    }
}

exports.getUserById = async ( ctx, next ) => {

}

exports.addUser = async ( ctx, next ) => {

}


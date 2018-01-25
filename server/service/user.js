import { User, UserKlass } from '../dbconfig/dbinit'
import moment from 'moment'

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
};

exports.logOut = async ( ctx, next ) => {
    next()
};

exports.adminLogIn = async ( ctx, next ) => {
    next()
};

exports.checkLogIn = async ( ctx, next ) =>{
    next()
};

exports.checkAdminLogIn = async ( ctx, next ) => {
    next()
};

exports.getAllUser = async ( ctx, next ) => {

    let Users = await User.findAll()
    let UserKlasses = await  UserKlass.findAll()
    let UserKlassDetail = []
    for(let i = 0; i < UserKlasses.length ; i++ ){
        UserKlassDetail.push({
            id: UserKlasses[i].id,
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
};

exports.getUserById = async ( ctx, next ) => {
    let userId = ctx.request.body.id;

    try{
        let user = await User.findOne({ where: {id: userId}});
        let userType = await user.getUserType();
        console.log(userType);
        let userData = {
            name: user.name,
            account: user.account,
            userType: userType.id,
            phone: user.phone,
            email: user.email,
            isUse: user.isUse
        };
        ctx.body = {
            user:userData,
            status: 1,
            message: '获取用户信息成功'
        }
    }catch (err){
        ctx.body = {
            status: 0,
            message: `查询用户信息失败，原因：${err}`
        }
    }
};

exports.addUser = async ( ctx, next ) => {
    let userData = ctx.request.body.user;

    try{
        let userType = await UserKlass.findOne({ where: {id:userData.userType}});
        let newUser = await User.create({
            name: userData.name,
            account: userData.account,
            password: userData.password,
            phone: userData.phone,
            email: userData.email,
            isUse: userData.isUse
        })
        await newUser.setUserType(userType);
        newUser.save()
        ctx.body = {
            status: 1,
            message: '创建成功'
        }
    }catch (err){
        ctx.body = {
            status: 0,
            message: '创建失败，原因：${err}'
        }
    }
};

exports.deleteUserById = async ( ctx, next ) => {
    let userId = ctx.request.body.id;
    try{
        let thisUser = await User.findOne({ where: { id: userId }});
        await thisUser.update({isUse: false});
        await thisUser.save();
        ctx.body = {
            status: 1,
            message: '成功禁用'
        }
    }catch (err){
        ctx.body = {
            status: 1,
            message: `禁用失败，原因 ${err}`
        }
    }
};

exports.modifyUserById = async ( ctx, next ) => {
    let user = ctx.request.body.user;
    try{
        let thisUser = await User.findOne({where:{id:user.id}});
        let thisUserType = await User.findOne({where: {id:user.userType}})
        await thisUser.update({
            account: user.account,
            name: user.name,
            phone: user.phone,
            email: user.email,
            isUse: user.isUse
        })
        thisUser.setUserType(thisUserType)
        thisUser.save()

        ctx.body = {
            status: 1,
            message: '用户信息更新成功'
        }
    }catch (err){
        ctx.body = {
            status: 0,
            message: `更新失败， 原因${err}`
        }
    }
};

import { User, UserKlass } from '../dbconfig/dbinit'
import math from 'math'

const ItemPerPage = 10 ;
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

    let Users = await User.findAll({ offset: (parseInt(ctx.params.page || 1) - 1) * ItemPerPage, limit: ItemPerPage });
    let UserKlasses = await  UserKlass.findAll();
    let UsersDetail = [];
    for(let index in Users){
        let userType = await Users[index].getUserType();
        UsersDetail.push({
            user: Users[index],
            userType: userType
        })
    }
    let count = await User.count();
    ctx.body = {
        counts: count,
        status: 1,
        message: '获取数据成功',
        usersDetail: UsersDetail,
        userKlassDetail: UserKlasses
    }
};

exports.getUserById = async ( ctx, next ) => {
    let userId = ctx.request.body.id;

    try{
        let user = await User.findOne({ where: { id: userId }});
        let userType = await user.getUserType();
        console.log(userType);
        let userData = {
            id: user.id,
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
        let thisUser = await User.findOne({where:{ id:user.id }});
        let thisUserType = await User.findOne({where: { id:user.userType }});
        await thisUser.update({
            account: user.account,
            name: user.name,
            phone: user.phone,
            email: user.email,
            isUse: user.isUse
        })
        thisUser.setUserType(thisUserType);
        thisUser.save();

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

exports.onlyGetAllUser = async ( ctx, next ) => {
    let users = await User.findAll();
    let thisUsers = []
    for(let index in users){
        thisUsers.push({
            key: users[index].id + '-' + users[index].name,
            value: users[index].id
        })
    }
    console.log(thisUsers)
    ctx.body = {
        users: thisUsers,
        status: 1,
        message: '成功获取用户数据'
    }
};
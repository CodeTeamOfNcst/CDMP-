import { sequelize, Apply, User, Device } from '../dbconfig/dbinit'
import { Op } from 'sequelize'
const ItemPerPage = 10 ;

exports.addApply = async ( ctx, next ) => {
    let device = ctx.request.body.device;
    try{
        if((!device.vioReason) || 
            (!device.user) || 
            (!device.device)
        ) throw("预约信息填写有误")
        let newDevice = await Apply.create({
            startDate: device.date[0],
            endDate: device.date[1],
            isAgree: device.isAgree,
            vioReason: device.vioReason,
            isUse: device.isUse
        });
        let applyer = await User.findOne({
            where:{id: device.user }
        });
        let applyDevice = await Device.findOne({
            where: {id: device.device}
        });
        await newDevice.setApplyer(applyer);
        await newDevice.setApplyDevice(applyDevice);
        await newDevice.save();

        ctx.body ={
            status: 1,
            message: '创建成功'
        }
    }catch (err){
        console.log(err);
        ctx.body ={
            status: 0,
            message: `创建失败，由于 ${err}`
        }
    }
    
};

exports.deleteApplyById = async ( ctx, next ) => {
    let applyId = ctx.request.body.id;
    try{
        let thisApply = await Apply.findOne({
            where: {id: applyId }
        });
        await thisApply.update({
            isUse: false
        });
        ctx.body = {
            status: 1,
            message: '禁用成功'
        }
    }catch (err){
        ctx.body = {
            status: 0,
            message: `禁用失败 由于 ${err}`
        }
    }   
}

exports.modifyApplyById = async ( ctx, next ) => {
    let apply = ctx.request.body.apply
    try{
        let thisApply = await Apply.findOne({
            where: {id: apply.id}
        });
        await thisApply.update({
            vioReason: apply.vioReason,
            isAgree: apply.isAgree,
            isUse: apply.isUse,
            startDate: apply.date[0],
            endDate: apply.date[1]
        });
        await thisApply.save();
        ctx.body = {
            status: 1,
            message: '修改成功'
        }
    }catch (err){
        ctx.body = {
            status: 1,
            message: `修改异常，原因 ${err}`
        }
    }
    
};

exports.getApplyById = async ( ctx, next ) => {
    let applyId = ctx.request.body.id;
    try{
        let thisApply = await Apply.findOne({
            where: { id: applyId }
        });
        let applyUser = await thisApply.getApplyer();
        let applyDevice = await thisApply.getApplyDevice();

        ctx.body = {
            apply: thisApply,
            applyUser: applyUser,
            applyDevice: applyDevice,

            status : 1,
            message: '成功获取信息'
        }
    }catch (err){
        ctx.body = {
            status : 0,
            message: `获取信息失败， 由于 ${err}`
        }
    }
    
};

exports.getAllApply = async ( ctx, next ) => {
    console.log(ctx.params);
    let applys = await Apply.findAll({ offset: (parseInt(ctx.params.page || 1) - 1) * ItemPerPage, limit: ItemPerPage });
    // let applys = await Apply.findAll({ offset: 5, limit: 5 }); // 分页查询
    // 教程上说由于原型链方法的原因不鼓励使用for in
    let Applys = [];
    for(let i=0; i<applys.length; i++){
        Applys.push({
            apply: applys[i],
            applyUser: await applys[i].getApplyer(),
            applyDevice: await applys[i].getApplyDevice()
        })
    }
    let count =  await Apply.count();
    ctx.body = {
        counts: count,
        applys: Applys,
        status: 1,
        message: '成功获取信息'
    }
};

exports.addApplyFront = async ( ctx, next) => {
    if(ctx.cookies.get("authUser")){
        try{
            let thisUserAccount = ctx.cookies.get("authUser")
            let thisUser = await User.findOne({
                where: { account:thisUserAccount }
            });
            if(thisUser){
                let thisDevice = await Device.findOne({
                    where: {id: ctx.request.body.deviceId}
                })
                let thisApply = await Apply.create({
                    vioReason: ctx.request.body.vioReason,
                    startDate: ctx.request.body.startDate,
                    endDate: ctx.request.body.endDate
                })
                thisApply.setApplyer(thisUser);
                thisApply.setApplyDevice(thisDevice)

                ctx.body = {
                    status: 1,
                    message: '成功'
                }
            }else{
                ctx.body = {
                    status: 0,
                    message: '用户不存在'
                }
            }
        }catch(err){
            console.log(err)
            ctx.body = {
                status: 0,
                message: `异常，由于 ${err}`
            }
        }
    }else{
        ctx.body = {
            status: 0,
            message: '用户未登陆 '
        }
    }
}

exports.applySearch = async (ctx, next) => {
    let search = ctx.request.body.search
    try{
        let searchResult = await Apply.findAll({
            where: { vioReason:{ [Op.like] : `%${search}%`}}
        })
        if(! searchResult || searchResult.length === 0) throw("未匹配到结果")
        let result = []
        for(let i =0; i< searchResult.length; i++){
            result.push({
                apply: searchResult[i],
                applyUser: await searchResult[i].getApplyer(),
                applyDevice: await searchResult[i].getApplyDevice()
            })
        }
        ctx.body = {
            result: result,
            status: 1,
            message: 'success'
        }
    }catch(err){
        console.error(err)
        ctx.body = {
            status: 0,
            message: `${err}`
        }
    }
}

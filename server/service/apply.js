import { sequelize, Apply, User, Device } from '../dbconfig/dbinit'

exports.addApply = async ( ctx, next ) => {
    let device = ctx.request.body.device;
    try{
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
};

exports.modifyApplyById = async ( ctx, next ) => {

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
    let applys = await Apply.findAll();
    // 教程上说由于原型链方法的原因不鼓励使用for in
    let Applys = [];
    for(let i=0; i<applys.length; i++){
        Applys.push({
            apply: applys[i],
            applyUser: await applys[i].getApplyer(),
            applyDevice: await applys[i].getApplyDevice()
        })
    }
    console.log(Applys);
    ctx.body = {
        applys: Applys,
        status: 1,
        message: '成功获取信息'
    }
};
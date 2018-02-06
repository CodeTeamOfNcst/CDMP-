import {
    Device,
    DeviceType,
    User
} from '../dbconfig/dbinit'
import fs from 'fs'
import uuid from 'uuid'
import { Op } from 'sequelize'

const ItemPerPage = 10;
exports.addDevice = async (ctx, next) => {
    let postData = ctx.request.body;
    console.log(postData);
    try {
        if(postData.name){throw("设备名称未定义")}
        let newDevice = await Device.create({
            name: postData.name,
            description: postData.describe,
            purchaseDate: postData.addDate,
            needRepair: postData.needRepair,
            canReserve: postData.canApply,
            isUse: postData.isUse
        });
        await newDevice.save();
        let deviceType = await DeviceType.findOne({
            where: {
                id: postData.TypeId
            }
        });
        await newDevice.setDeviceType(deviceType);
        await newDevice.save();
        ctx.body = {
            status: 1,
            message: '创建成功'
        }
    } catch (err) {
        console.log(err);
        ctx.body = {
            status: 0,
            message: `创建失败，原因： ${err}`
        }
    }
    
};

exports.delteDeviceById = async (ctx, next) => {
    // 尽量不删除数据库中的记录
    let postData = ctx.request.body;
    let deviceId = postData.id;
    try {
        let deleteDevice = await Device.findOne({
            where: {
                id: deviceId
            }
        });
        let result = await deleteDevice.update({
            isUse: false
        });
        deleteDevice.save();
        ctx.body = {
            status: 1,
            message: 'success'
        }
    } catch (err) {
        ctx.body = {
            status: 0,
            message: `置不可用失败， 原因 ${err}`
        }
    }
    
};

exports.modifyDeviceById = async (ctx, next) => {
    let postData = ctx.request.body;
    let device_id = ctx.request.body.id;
    let type_id = ctx.request.body.deviceTypeId;
    let imagePath = ctx.request.body.path;
    try {
        let thisDevice = await Device.findOne({
            where: {
                id: device_id
            }
        });
        if (thisDevice.imgFilePath !== imagePath && imagePath) { // 判断是否上传了新的图片，没有则不改变图片
            let oldPath = thisDevice.imgFilePath;
            let targetPath = 'uploads/deviceImages/' + uuid.v1() + '.jpg'; //图片路径不一致，将图片copy到文件夹下
            if (fs.existsSync('static/' + imagePath)) {
                fs.readFile('static/' + imagePath, (err, data) => {
                    fs.writeFile('static/' + targetPath, data, (err) => {
                        if (err) console.log(err)
                    })
                });
                thisDevice.update({
                    imgFilePath: targetPath //直接将可以作为图片路径显示的路径存储在数据库中
                });
                if (fs.existsSync('static/' + oldPath) && oldPath) fs.unlink('static/' + oldPath)
            }
        }
        let thisType = await DeviceType.findOne({
            where: {
                id: type_id
            }
        });
        await thisDevice.setDeviceType(thisType);
        console.log(postData);
        await thisDevice.update({
            name: postData.name,
            purchaseDate: postData.date,
            needRepair: postData.needRepair,
            canReserve: postData.canApply || true,
            isUse: postData.isUse,
            description: postData.describe
        });
        await thisDevice.setDeviceType(thisType);
        await thisDevice.save();
        ctx.body = {
            status: 1,
            message: '修改成功'
        }
    } catch (err) {
        console.log(err);
        ctx.body = {
            status: 0,
            message: `更新失败，由于 ${ err }`
        }
    }
    
};

exports.getDeviceById = async (ctx, next) => {
    let deviceId = ctx.request.body.id;

    try {
        let thisDevice = await Device.findOne({
            where: {
                id: deviceId
            }
        });
        let deviceType = await DeviceType.findOne({
            where: {
                id: thisDevice.device_type
            }
        });

        let device = {
            id: thisDevice.id,
            name: thisDevice.name,
            imgFilePath: thisDevice.imgFilePath,
            description: thisDevice.description,
            purchaseDate: thisDevice.purchaseDate,
            needRepair: thisDevice.needRepair,
            canReserve: thisDevice.canReserve,
            device_type: deviceType.id,
            device_type_name: deviceType.name,
            isUse: thisDevice.isUse
        };
        ctx.body = {
            device: device,
            status: 1,
            message: 'success'
        }
    } catch (err) {
        ctx.body = {
            status: 0,
            message: `获取详细信息失败， 原因 ${err}`
        }
    }
    
};

exports.getAllDevice = async (ctx, next) => {
    let devices = await Device.findAll({
        offset: (parseInt(ctx.params.page || 1) - 1) * ItemPerPage,
        limit: ItemPerPage
    });
    let devicesType = await DeviceType.findAll();
    let Devices = [];
    let DevicesTypes = [];
    for (let i = 0; i < devices.length; i++) {
        Devices.push({
            id: devices[i].id,
            date: devices[i].purchaseDate,
            name: devices[i].name,
            disable: devices[i].isUse ? '可用' : '禁用',
            type: devicesType[devices[i].device_type - 1].name,
            type_id: devicesType[devices[i].device_type - 1].id,
            imgFilePath: devices[i].imgFilePath,
            canReserve: devices[i].canReserve,
            show: true,
        })
    }
    for (let i = 0; i < devicesType.length; i++) {
        DevicesTypes.push({
            value: devicesType[i].id,
            label: devicesType[i].name
        })
    }
    let count = await Device.count();
    ctx.body = {
        status: 1,
        message: '成功获取数据',
        counts: count,
        Devices: Devices,
        DeviceTypes: DevicesTypes
    }
    
};

exports.onluGetAllDevice = async (ctx, next) => {
    let devices = await Device.findAll();
    let thisDevices = [];
    for (let i = 0; i < devices.length; i++) {
        thisDevices.push({
            key: devices[i].id,
            value: devices[i].id + devices[i].name
        })
    }
    console.log(thisDevices);
    ctx.body = {
        devices: thisDevices,
        status: 1,
        message: '获取数据成功'
    }
    
};

exports.getDeviceByTypeId = async (ctx, next) => {
    let typeId = ctx.request.body.type_id
    try{
        let thisDeviceType = await DeviceType.findOne({
            where: {id: typeId}
        })
        if(!thisDeviceType)throw("获取信息失败")
        let devices = await thisDeviceType.getDevice()
        let result = []
        for(let i=0; i< devices.length; i++){
            result.push({
                id: devices[i].id,
                date: devices[i].purchaseDate,
                name: devices[i].name,
                disable: devices[i].isUse ? '可用' : '禁用',
                type: thisDeviceType.name,
                type_id: thisDeviceType.id,
                imgFilePath: devices[i].imgFilePath,
                canReserve: devices[i].canReserve,
                show: true,
            })
        }
        ctx.body = {
            devices: result,
            status: 1,
            message: 'success'
        }
    }catch(err){
        ctx.body = {
            status: 1,
            message: `${err}`
        }
    }
}

exports.getDeviceByName = async (ctx, next) => {
    let searchName = ctx.request.body.search_input
    let devices = await Device.findAll({
        where: {name: {$iLike: searchName}}
    });
    let result = [];
    for(let i=0; i< devices.length; i++){
        result.push({
            id: devices[i].id,
            date: devices[i].purchaseDate,
            name: devices[i].name,
            disable: devices[i].isUse ? '可用' : '禁用',
            type: (await devices[i].getDeviceType()).name,
            type_id:(await devices[i].getDeviceType()).id,
            imgFilePath: devices[i].imgFilePath,
            canReserve: devices[i].canReserve,
            show: true,
        })
    }
    return {
        devices: result,
        status: 1,
        message: 'success'
    }
}

exports.deviceSearch = async (ctx, next) => {
    let search = ctx.request.body.search
    try{
        let searchResult = await Device.findAll({
            where: {name:{ [Op.like] : `%${search}%`}}
        })
        if(! searchResult || searchResult.length === 0) throw("未匹配到结果")
        let result = []
        for(let i=0;i<searchResult.length; i++){
            result.push({
                id: searchResult[i].id,
                date: searchResult[i].purchaseDate,
                name: searchResult[i].name,
                disable: searchResult[i].isUse ? '可用' : '禁用',
                type: (await searchResult[i].getDeviceType).name,
                type_id: (await searchResult[i].getDeviceType).id,
                imgFilePath: searchResult[i].imgFilePath,
                canReserve: searchResult[i].canReserve,
                show: true,
            })
        }
        ctx.body = {
            result: result,
            status: 1,
            message: 'success'
        }
    }catch(err){
        ctx.body = {
            status: 0,
            message: `${err}`
        }
    }
}
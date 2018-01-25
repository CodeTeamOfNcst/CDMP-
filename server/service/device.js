import { Device, DeviceType } from '../dbconfig/dbinit'
import moment from 'moment'
exports.addDevice = async ( ctx, next ) => {
    let postData = ctx.request.body
    console.log(postData)
    try{
        let newDevice = await Device.create({
            name: postData.name,
            description: postData.describe,
            purchaseDate: postData.addDate,
            needRepair: postData.needRepair,
            canReserve: postData.canApply,
            isUse: postData.isUse
        })
        await newDevice.save()
        let deviceType = await DeviceType.findOne({where: {id: postData.TypeId}})
        await newDevice.setDeviceType(deviceType)
        await newDevice.save()
        ctx.body = {
            status: 1,
            message: '创建成功'
        }
    }catch (err){
        console.log(err)
        ctx.body = {
            status: 0,
            message: `创建失败，原因： ${err}`
        }
    }

}

exports.delteDeviceById = async ( ctx, next ) => {
    // 尽量不删除数据库中的记录
    let postData = ctx.request.body
    let deviceId = postData.id
    try{
        let deleteDevice = await  Device.findOne({ where: { id: deviceId }})
        let result = await deleteDevice.update({ isUse: false })
        deleteDevice.save()
        ctx.body = {
            status: 1,
            message: 'success'
        }
    }catch (err){
        ctx.body = {
            status: 0,
            message: `置不可用失败， 原因 ${err}`
        }
    }
}

exports.modifyDeviceById = async ( ctx, next ) => {
    let postData = ctx.request.body
    let device_id = ctx.request.body.id
    let type_id = ctx.request.body.deviceTypeId
    try {
        let thisDevice = await Device.findOne({ where: { id: device_id } })
        let thisType = await  DeviceType.findOne({where: { id: type_id }})
        await thisDevice.setDeviceType(thisType)
        console.log(postData)
        await thisDevice.update({
            name: postData.name,
            purchaseDate: postData.date,
            needRepair: postData.needRepair,
            canReserve : postData.canApply || true,
            isUse: postData.isUse,
            description: postData.describe
        })
        await thisDevice.setDeviceType(thisType)
        await thisDevice.save()
        ctx.body = {
            status: 1,
            message: '修改成功'
        }
    }catch (err) {
        console.log( err )
        ctx.body = {
            status: 0,
            message: `更新失败，由于 ${ err }`
        }
    }
}

exports.getDeviceById = async ( ctx, next ) => {
    let postData = ctx.request.body
    let deviceId = postData.id

    try{
        let thisDevice = await Device.findOne({where: { id:deviceId } })
        let deviceType = await DeviceType.findOne({where: { id:thisDevice.device_type }})

        let device = {
            name: thisDevice.name,
            imgFilePath: thisDevice.imgFilePath,
            description: thisDevice.description,
            purchaseDate: moment(thisDevice.createdAt).format('YYYY-MM-DD'),
            needRepair: thisDevice.needRepair,
            canReserve: thisDevice.canReserve,
            device_type: deviceType.id,
            isUse: thisDevice.isUse
        }
        ctx.body = {
            device: device,
            status: 1,
            message: 'success'
        }
    }catch (err){
        ctx.body = {
            status: 0,
            message: `获取详细信息失败， 原因 ${err}`
        }
    }
}

exports.getAllDevice = async ( ctx, next ) => {
    let devices = await Device.findAll()
    let devicesType = await DeviceType.findAll()
    let Devices = []
    let DevicesTypes = []
    for(let i = 0 ; i< devices.length; i++ ){
        Devices.push({
            id: devices[i].id,
            date: moment(devices[i].createdAt).format('YYYY-MM-DD'),
            name: devices[i].name,
            disable: devices[i].isUse ? '可用': '禁用',
            type: devicesType[devices[i].device_type - 1].name,
            operation:''
        })
    }
    for(let i = 0; i<devicesType.length; i++ ){
        DevicesTypes.push({
            value: devicesType[i].id,
            label: devicesType[i].name
        })
    }

    ctx.body ={
        Devices: Devices,
        DeviceTypes: DevicesTypes
    }
}
import { sequelize,Apply,Device,DeviceType,Message,MessageKlass,Rule,User,UserKlass, } from '../dbconfig/dbinit'
import Sequelize from 'sequelize'
import Date from 'Date'

module.exports.testGetData = async (ctx, next) => {
    ctx.body = {
        status: 1,
        message: 'Get Data From Test Get',
    }
}
module.exports.AddUser = async ( ctx, next ) => {

}

module.exports.addDataToDataBase = async ( ctx, next ) => {

    try{
        let admin = await UserKlass.create({ name: '管理员', isUse:true })
        let commonUser = await UserKlass.create({ name: '用户', isUse:true })
        let badGay = await UserKlass.create({ name: '关系用户', isUse:true })

        let user1 = await User.create({ account: 'haoyiqing', password: '123456', name: '郝一擎', email: '1337074512@qq.com', userType: admin})
        let user2 = await User.create({ account: 'zhanglingxue', password: '123456', name: '张凌雪', email: 'zhanglingxue@qq.com', userType: commonUser})
        let user3 = await User.create({ account: 'wangyangyang', password: '123456', name: '王洋洋', email: 'wangyangyang@qq.com', userType: badGay})

        let rule1 = await Rule.create({ publishDate: Sequelize.NOW, content: '第一条公告'})
        let rule2 = await Rule.create({ publishDate: Sequelize.NOW, content: '第二条公告'})
        let rule3 = await Rule.create({ publishDate: Sequelize.NOW, content: '第三条公告'})

        let successMessageType = MessageKlass.create({ name: '成功' })
        let commonMessageType = MessageKlass.create({ name: '普通消息'})
        let failMessageType = MessageKlass.create({ name: '失败消息'})

        let successMessage = Message.create({ content: '这是一条成功的消息', publishDate: Sequelize.NOW, isPublished: false, isRead: false, deviceType: successMessageType})
        let commonMessage = Message.create({ content: '这是一条普通的消息', publishDate: Sequelize.NOW, isPublished: false, isRead: false, deviceType: commonMessageType})
        let failMessage = Message.create({ content: '这是一条失败的消息', publishDate: Sequelize.NOW, isPublished: false, isRead: false, deviceType: failMessageType})

        let computerDeviceType = DeviceType.create({ name: '计算机系' })
        let chemicalDeviceType = DeviceType.create({ name: '化学系' })
        let metallurgicalDeviceType = DeviceType.create({ name: '冶金系' })

        let device1 = Device.create({ name: '计算机系的仪器', description: '这是计算机系的仪器', dType: computerDeviceType, imgFilePath: '/upload/device/device1' })
        let device2 = Device.create({ name: '化工系的仪器', description: '这是化工系的仪器', dType: chemicalDeviceType, imgFilePath: '/upload/device/device2' })
        let device3 = Device.create({ name: '冶金系的仪器', description: '这是冶金系的仪器', dType: metallurgicalDeviceType, imgFilePath: '/upload/device/device3' })

        let apply1 = Apply.create({ startDate: Sequelize.NOW, endDate: Sequelize.NOW, vioReason: 'user1 想要用计算机系的仪器', applyer: user1, applyDevice: device1 })
        let apply2 = Apply.create({ startDate: Sequelize.NOW, endDate: Sequelize.NOW, vioReason: 'user2 想要用化学系的仪器', applyer: user2, applyDevice: device2 })
        let apply3 = Apply.create({ startDate: Sequelize.NOW, endDate: Sequelize.NOW, vioReason: 'user3 想要用冶金系的仪器', applyer: user3, applyDevice: device2 })

        ctx.body = {
            status: 'success!'
        }
    }catch(err){
        console.error("Add data to database failed because", err)
        ctx.body = {
            status: 'failed'
        }
    }
    
    
    
}

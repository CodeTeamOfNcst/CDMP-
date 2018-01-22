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

        let admin = await UserKlass.findOrCreate({ name: '管理员', isUse:true })
        let commonUser = await UserKlass.findOrCreate({ name: '用户', isUse:true })
        let badGay = await UserKlass.findOrCreate({ name: '关系用户', isUse:true })

        let user1 = await User.findOrCreate({ account: 'haoyiqing', password: '123456', name: '郝一擎', email: '1337074512@qq.com', userType: admin})
        let user2 = await User.findOrCreate({ account: 'zhanglingxue', password: '123456', name: '张凌雪', email: 'zhanglingxue@qq.com', userType: commonUser})
        let user3 = await User.findOrCreate({ account: 'wangyangyang', password: '123456', name: '王洋洋', email: 'wangyangyang@qq.com', userType: badGay})

        let rule1 = await Rule.findOrCreate({ content: '第一条公告', title: '第一条公告'})
        let rule2 = await Rule.findOrCreate({ content: '第二条公告', title: '第二条公告'})
        let rule3 = await Rule.findOrCreate({ content: '第三条公告', title: '第三条公告'})

        let successMessageType = MessageKlass.findOrCreate({ name: '成功' })
        let commonMessageType = MessageKlass.findOrCreate({ name: '普通消息'})
        let failMessageType = MessageKlass.findOrCreate({ name: '失败消息'})

        let successMessage = Message.findOrCreate({ content: '这是一条成功的消息', isPublished: false, isRead: false, deviceType: successMessageType})
        let commonMessage = Message.findOrCreate({ content: '这是一条普通的消息', isPublished: false, isRead: false, deviceType: commonMessageType})
        let failMessage = Message.findOrCreate({ content: '这是一条失败的消息', isPublished: false, isRead: false, deviceType: failMessageType})

        let computerDeviceType = DeviceType.findOrCreate({ name: '计算机系' })
        let chemicalDeviceType = DeviceType.findOrCreate({ name: '化学系' })
        let metallurgicalDeviceType = DeviceType.findOrCreate({ name: '冶金系' })

        let device1 = Device.findOrCreate({ name: '计算机系的仪器', description: '这是计算机系的仪器', deviceType: computerDeviceType, imgFilePath: '/upload/device/device1' })
        let device2 = Device.findOrCreate({ name: '化工系的仪器', description: '这是化工系的仪器', deviceType: chemicalDeviceType, imgFilePath: '/upload/device/device2' })
        let device3 = Device.findOrCreate({ name: '冶金系的仪器', description: '这是冶金系的仪器', deviceType: metallurgicalDeviceType, imgFilePath: '/upload/device/device3' })

        let apply1 = Apply.findOrCreate({ vioReason: 'user1 想要用计算机系的仪器', applyer: user1, applyDevice: device1 })
        let apply2 = Apply.findOrCreate({ vioReason: 'user2 想要用化学系的仪器', applyer: user2, applyDevice: device2 })
        let apply3 = Apply.findOrCreate({ vioReason: 'user3 想要用冶金系的仪器', applyer: user3, applyDevice: device2 })

        ctx.body = {
            message: 'success!'
        }
    
    
}

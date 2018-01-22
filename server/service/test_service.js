import { sequelize,Apply,Device,DeviceType,Message,MessageKlass,Rule,User,UserKlass, } from '../dbconfig/dbinit'
import Sequelize from 'sequelize'
import Date from 'Date'
import { getOrCreate } from '../util/modelFns'

module.exports.testGetData = async (ctx, next) => {
    ctx.body = {
        status: 1,
        message: 'Get Data From Test Get',
    }
}
module.exports.AddUser = async ( ctx, next ) => {

}

module.exports.findOrCreateData = async ( ctx, next ) => {

        let admin = await UserKlass.findOrCreate({ where: { name: '管理员' } })[0] 
        let commonUser = await UserKlass.findOrCreate({ where: { name: '用户' } })[0]
        let badGay = await UserKlass.findOrCreate({ where: { name: '关系用户' } })[0]

        let user1 = await User.findOrCreate({ where: { account: 'haoyiqing', password: '123456', name: '郝一擎', email: '1337074512@qq.com', userType: admin} })[0]
        let user2 = await User.findOrCreate({ where: { account: 'zhanglingxue', password: '123456', name: '张凌雪', email: 'zhanglingxue@qq.com', userType: commonUser} })[0]
        let user3 = await User.findOrCreate({ where: { account: 'wangyangyang', password: '123456', name: '王洋洋', email: 'wangyangyang@qq.com', userType: badGay} })[0]

        let rule1 = await Rule.findOrCreate({ where: { content: '第一条公告', title: '第一条公告'} })[0]
        let rule2 = await Rule.findOrCreate({ where: { content: '第二条公告', title: '第二条公告'} })[0]
        let rule3 = await Rule.findOrCreate({ where: { content: '第三条公告', title: '第三条公告'} })[0]

        let successMessageType = MessageKlass.findOrCreate({ where: { name: '成功' } })[0]
        let commonMessageType = MessageKlass.findOrCreate({ where: { name: '普通消息'} })[0]
        let failMessageType = MessageKlass.findOrCreate({ where: { name: '失败消息'} })[0]

        let successMessage = Message.findOrCreate({ where: { content: '这是一条成功的消息', isPublished: false, isRead: false, deviceType: successMessageType} })[0]
        let commonMessage = Message.findOrCreate({ where: { content: '这是一条普通的消息', isPublished: false, isRead: false, deviceType: commonMessageType} })[0]
        let failMessage = Message.findOrCreate({ where: { content: '这是一条失败的消息', isPublished: false, isRead: false, deviceType: failMessageType} })[0]

        let computerDeviceType = DeviceType.findOrCreate({ where: { name: '计算机系' } })[0]
        let chemicalDeviceType = DeviceType.findOrCreate({ where: { name: '化学系' } })[0]
        let metallurgicalDeviceType = DeviceType.findOrCreate({ where: { name: '冶金系' } })[0]

        let device1 = Device.findOrCreate({ where: { name: '计算机系的仪器', description: '这是计算机系的仪器', deviceType: computerDeviceType, imgFilePath: '/upload/device/device1' } })[0]
        let device2 = Device.findOrCreate({ where: { name: '化工系的仪器', description: '这是化工系的仪器', deviceType: chemicalDeviceType, imgFilePath: '/upload/device/device2' } })[0]
        let device3 = Device.findOrCreate({ where: { name: '冶金系的仪器', description: '这是冶金系的仪器', deviceType: metallurgicalDeviceType, imgFilePath: '/upload/device/device3' } })[0]

        let apply1 = Apply.findOrCreate({ where: { vioReason: 'user1 想要用计算机系的仪器', applyer: user1, applyDevice: device1 } })[0]
        let apply2 = Apply.findOrCreate({ where: { vioReason: 'user2 想要用化学系的仪器', applyer: user2, applyDevice: device2 } })[0]
        let apply3 = Apply.findOrCreate({ where: { vioReason: 'user3 想要用冶金系的仪器', applyer: user3, applyDevice: device2 } })[0]

        ctx.body = {
            message: 'success!'
        }
    
}

exports.getOrCreateData = async ( ctx, next ) => {

        let admin = await getOrCreate(UserKlass, { name: '管理员' } )
        let commonUser = await getOrCreate(UserKlass, { name: '用户' } )
        let badGay = await getOrCreate(UserKlass, { name: '关系用户' } )

        let user1 = await getOrCreate(User, { account: 'haoyiqing', password: '123456', name: '郝一擎', email: '1337074512@qq.com', userType: admin })
        let user2 = await getOrCreate(User, { account: 'zhanglingxue', password: '123456', name: '张凌雪', email: 'zhanglingxue@qq.com', userType: commonUser })
        let user3 = await getOrCreate(User, { account: 'wangyangyang', password: '123456', name: '王洋洋', email: 'wangyangyang@qq.com', userType: badGay })

        let rule1 = await getOrCreate(Rule, { content: '第一条公告', title: '第一条公告' } )
        let rule2 = await getOrCreate(Rule, { content: '第二条公告', title: '第二条公告' } )
        let rule3 = await getOrCreate(Rule, { content: '第三条公告', title: '第三条公告' } )

        let successMessageType = getOrCreate(MessageKlass, { name: '成功' })
        let commonMessageType = getOrCreate(MessageKlass, { name: '普通消息' })
        let failMessageType = getOrCreate(MessageKlass, { name: '失败消息' })

        let successMessage = getOrCreate(Message, { content: '这是一条成功的消息', isPublished: false, isRead: false, deviceType: successMessageType })
        let commonMessage = getOrCreate(Message, { content: '这是一条普通的消息', isPublished: false, isRead: false, deviceType: commonMessageType })
        let failMessage = getOrCreate(Message, { content: '这是一条失败的消息', isPublished: false, isRead: false, deviceType: failMessageType })

        let computerDeviceType = getOrCreate(DeviceType, { name: '计算机系' })
        let chemicalDeviceType = getOrCreate(DeviceType, { name: '化学系' })
        let metallurgicalDeviceType = getOrCreate(DeviceType, { name: '冶金系' })

        let device1 = getOrCreate(Device, { name: '计算机系的仪器', description: '这是计算机系的仪器', deviceType: computerDeviceType, imgFilePath: '/upload/device/device1' })
        let device2 = getOrCreate(Device, { name: '化工系的仪器', description: '这是化工系的仪器', deviceType: chemicalDeviceType, imgFilePath: '/upload/device/device2' })
        let device3 = getOrCreate(Device, { name: '冶金系的仪器', description: '这是冶金系的仪器', deviceType: metallurgicalDeviceType, imgFilePath: '/upload/device/device3' })

        let apply1 = getOrCreate(Apply, { vioReason: 'user1 想要用计算机系的仪器', applyer: user1, applyDevice: device1 })
        let apply2 = getOrCreate(Apply, { vioReason: 'user2 想要用化学系的仪器', applyer: user2, applyDevice: device2 })
        let apply3 = getOrCreate(Apply, { vioReason: 'user3 想要用冶金系的仪器', applyer: user3, applyDevice: device2 })

        ctx.body = {
            message: 'success!'
        }
}

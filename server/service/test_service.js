import {
    Apply,
    Device,
    DeviceType,
    Message,
    MessageKlass,
    Rule,
    User,
    UserKlass,
} from '../dbconfig/dbinit'

import {
    getOrCreate
} from '../util/modelFns'

/**
 * 测试koa自带的上下文封装
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
module.exports.testGetData = async (ctx, next) => {
    ctx.body = {
        status: 1,
        message: 'Get Data From Test Get',
    }
}
module.exports.AddUser = async (ctx, next) => {

}

/**
 * 寻找或者创建数据 同样有bug 而且不小，我实在不想填坑了
 * @param { [object] } ctx 
 * @param { [object] } next 
 */
module.exports.findOrCreateData = async (ctx, next) => {

    let admin = await UserKlass.findOrCreate({
        where: {
            name: '管理员'
        }
    })[0]
    let commonUser = await UserKlass.findOrCreate({
        where: {
            name: '用户'
        }
    })[0]
    let badGay = await UserKlass.findOrCreate({
        where: {
            name: '关系用户'
        }
    })[0]

    let user1 = await User.findOrCreate({
        where: {
            account: 'haoyiqing',
            password: '123456',
            name: '郝一擎',
            email: '1337074512@qq.com',
            userType: admin
        }
    })[0]
    let user2 = await User.findOrCreate({
        where: {
            account: 'zhanglingxue',
            password: '123456',
            name: '张凌雪',
            email: 'zhanglingxue@qq.com',
            userType: commonUser
        }
    })[0]
    let user3 = await User.findOrCreate({
        where: {
            account: 'wangyangyang',
            password: '123456',
            name: '王洋洋',
            email: 'wangyangyang@qq.com',
            userType: badGay
        }
    })[0]

    let rule1 = await Rule.findOrCreate({
        where: {
            content: '第一条公告',
            title: '第一条公告'
        }
    })[0]
    let rule2 = await Rule.findOrCreate({
        where: {
            content: '第二条公告',
            title: '第二条公告'
        }
    })[0]
    let rule3 = await Rule.findOrCreate({
        where: {
            content: '第三条公告',
            title: '第三条公告'
        }
    })[0]

    let successMessageType = await MessageKlass.findOrCreate({
        where: {
            name: '成功'
        }
    })[0]
    let commonMessageType = await MessageKlass.findOrCreate({
        where: {
            name: '普通消息'
        }
    })[0]
    let failMessageType = await MessageKlass.findOrCreate({
        where: {
            name: '失败消息'
        }
    })[0]

    let successMessage = await Message.findOrCreate({
        where: {
            content: '这是一条成功的消息',
            isPublished: false,
            isRead: false,
            deviceType: successMessageType
        }
    })[0]
    let commonMessage = await Message.findOrCreate({
        where: {
            content: '这是一条普通的消息',
            isPublished: false,
            isRead: false,
            deviceType: commonMessageType
        }
    })[0]
    let failMessage = await Message.findOrCreate({
        where: {
            content: '这是一条失败的消息',
            isPublished: false,
            isRead: false,
            deviceType: failMessageType
        }
    })[0]

    let computerDeviceType = await DeviceType.findOrCreate({
        where: {
            name: '计算机系'
        }
    })[0]
    let chemicalDeviceType = await DeviceType.findOrCreate({
        where: {
            name: '化学系'
        }
    })[0]
    let metallurgicalDeviceType = await DeviceType.findOrCreate({
        where: {
            name: '冶金系'
        }
    })[0]

    let device1 = await Device.findOrCreate({
        where: {
            name: '计算机系的仪器',
            description: '这是计算机系的仪器',
            deviceType: computerDeviceType,
            imgFilePath: '/upload/device/device1'
        }
    })[0]
    let device2 = await Device.findOrCreate({
        where: {
            name: '化工系的仪器',
            description: '这是化工系的仪器',
            deviceType: chemicalDeviceType,
            imgFilePath: '/upload/device/device2'
        }
    })[0]
    let device3 = await Device.findOrCreate({
        where: {
            name: '冶金系的仪器',
            description: '这是冶金系的仪器',
            deviceType: metallurgicalDeviceType,
            imgFilePath: '/upload/device/device3'
        }
    })[0]

    let apply1 = await Apply.findOrCreate({
        where: {
            vioReason: 'user1 想要用计算机系的仪器',
            applyer: user1,
            applyDevice: device1
        }
    })[0]
    let apply2 = await Apply.findOrCreate({
        where: {
            vioReason: 'user2 想要用化学系的仪器',
            applyer: user2,
            applyDevice: device2
        }
    })[0]
    let apply3 = await Apply.findOrCreate({
        where: {
            vioReason: 'user3 想要用冶金系的仪器',
            applyer: user3,
            applyDevice: device2
        }
    })[0]

    ctx.body = {
        status: 1,
        message: 'Get Data From Test Get',
    }

}

/**
 * 尝试获取或创建的方式添加数据有巨大的 bug 懒得填坑了
 * @param { [object] } ctx
 * @param { [object] } next
 */
exports.getOrCreateData = async (ctx, next) => {

    let admin = await getOrCreate(UserKlass, {
        name: '管理员'
    })
    let commonUser = await getOrCreate(UserKlass, {
        name: '用户'
    })
    let badGay = await getOrCreate(UserKlass, {
        name: '关系用户'
    })

    let user1 = await getOrCreate(User, {
        account: 'haoyiqing',
        password: '123456',
        name: '郝一擎',
        email: '1337074512@qq.com',
        userType: admin
    })
    let user2 = await getOrCreate(User, {
        account: 'zhanglingxue',
        password: '123456',
        name: '张凌雪',
        email: 'zhanglingxue@qq.com',
        userType: commonUser
    })
    let user3 = await getOrCreate(User, {
        account: 'wangyangyang',
        password: '123456',
        name: '王洋洋',
        email: 'wangyangyang@qq.com',
        userType: badGay
    })

    let rule1 = await getOrCreate(Rule, {
        content: '第一条公告',
        title: '第一条公告'
    })
    let rule2 = await getOrCreate(Rule, {
        content: '第二条公告',
        title: '第二条公告'
    })
    let rule3 = await getOrCreate(Rule, {
        content: '第三条公告',
        title: '第三条公告'
    })

    let successMessageType = await getOrCreate(MessageKlass, {
        name: '成功'
    })
    let commonMessageType = await getOrCreate(MessageKlass, {
        name: '普通消息'
    })
    let failMessageType = await getOrCreate(MessageKlass, {
        name: '失败消息'
    })

    let successMessage = await getOrCreate(Message, {
        content: '这是一条成功的消息',
        isPublished: false,
        isRead: false,
        deviceType: successMessageType
    })
    let commonMessage = await getOrCreate(Message, {
        content: '这是一条普通的消息',
        isPublished: false,
        isRead: false,
        deviceType: commonMessageType
    })
    let failMessage = await getOrCreate(Message, {
        content: '这是一条失败的消息',
        isPublished: false,
        isRead: false,
        deviceType: failMessageType
    })

    let computerDeviceType = await getOrCreate(DeviceType, {
        name: '计算机系'
    })
    let chemicalDeviceType = await getOrCreate(DeviceType, {
        name: '化学系'
    })
    let metallurgicalDeviceType = await getOrCreate(DeviceType, {
        name: '冶金系'
    })

    let device1 = await getOrCreate(Device, {
        name: '计算机系的仪器',
        description: '这是计算机系的仪器',
        deviceType: computerDeviceType,
        imgFilePath: '/upload/device/device1'
    })
    let device2 = await getOrCreate(Device, {
        name: '化工系的仪器',
        description: '这是化工系的仪器',
        deviceType: chemicalDeviceType,
        imgFilePath: '/upload/device/device2'
    })
    let device3 = await getOrCreate(Device, {
        name: '冶金系的仪器',
        description: '这是冶金系的仪器',
        deviceType: metallurgicalDeviceType,
        imgFilePath: '/upload/device/device3'
    })

    let apply1 = await getOrCreate(Apply, {
        vioReason: 'user1 想要用计算机系的仪器',
        applyer: user1,
        applyDevice: device1
    })
    let apply2 = await getOrCreate(Apply, {
        vioReason: 'user2 想要用化学系的仪器',
        applyer: user2,
        applyDevice: device2
    })
    let apply3 = await getOrCreate(Apply, {
        vioReason: 'user3 想要用冶金系的仪器',
        applyer: user3,
        applyDevice: device2
    })

    ctx.body = {
        status: 1,
        message: 'Get Data From Test Get',
    }
}

/**
 * 直接尝试创建数据
 * @param { [object] } ctx 
 * @param { [object] } next 
 */
exports.createData = async (ctx, next) => {
    try {
        let admin = await UserKlass.create({
            name: '管理员'
        });
        let commonUser = await UserKlass.create({
            name: '用户'
        });
        let badGay = await UserKlass.create({
            name: '关系用户'
        });

        let user1 = await User.create({
            account: 'haoyiqing',
            password: '123456',
            name: '郝一擎',
            email: '1337074512@qq.com'
        });
        await user1.setUserType(admin);
        let user2 = await User.create({
            account: 'zhanglingxue',
            password: '123456',
            name: '张凌雪',
            email: 'zhanglingxue@qq.com'
        });
        await user2.setUserType(commonUser);
        let user3 = await User.create({
            account: 'huiliyi',
            password: '123456',
            name: '上杉绘梨衣',
            email: 'shangshanhuiliyi@qq.com'
        });
        await user3.setUserType(badGay);
        let user4 = await User.create({
            account: 'lumingfei',
            password: '123456',
            name: '路明非',
            email: 'lumingfei@qq.com'
        });
        await user4.setUserType(commonUser);
        let user5 = await User.create({
            account: 'chenwenwen',
            password: '123456',
            name: '陈雯雯',
            email: 'chenwenwen@qq.com'
        });
        await user5.setUserType(badGay);
        let user6 = await User.create({
            account: 'chenmotong',
            password: '123456',
            name: '陈墨瞳',
            email: 'chenmotong@qq.com'
        });
        await user6.setUserType(commonUser);
        let user7 = await User.create({
            account: 'kaisa',
            password: '123456',
            name: '凯撒',
            email: 'kaisa@qq.com'
        });
        await user7.setUserType(badGay);
        let user8 = await User.create({
            account: 'chuzihang',
            password: '123456',
            name: '楚子航',
            email: 'chuzihang@qq.com'
        });
        await user8.setUserType(commonUser);
        let user9 = await User.create({
            account: 'lumingze',
            password: '123456',
            name: '路明泽',
            email: 'lumingze@qq.com'
        });
        await user9.setUserType(badGay);
        let user10 = await User.create({
            account: 'liuzhenhan',
            password: '123456',
            name: '刘震撼',
            email: 'liuzhenhan@qq.com'
        });
        await user10.setUserType(commonUser);
        let user11 = await User.create({
            account: 'hailun',
            password: '123456',
            name: '海伦',
            email: 'hailun@qq.com'
        });
        await user11.setUserType(badGay);
        let user12 = await User.create({
            account: 'halibote',
            password: '123456',
            name: '哈利珀特',
            email: 'halibote@qq.com'
        });
        await user12.setUserType(commonUser);
        let user13 = await User.create({
            account: 'ningyu',
            password: '123456',
            name: '凝玉',
            email: 'ningyu@qq.com'
        });
        await user13.setUserType(badGay);

        await Rule.create({
            content: '第一条公告',
            title: '第一条公告'
        });
        await Rule.create({
            content: '第二条公告',
            title: '第二条公告'
        });
        await Rule.create({
            content: '第三条公告',
            title: '第三条公告'
        });
        await Rule.create({
            content: '第四条公告',
            title: '第四条公告'
        });
        await Rule.create({
            content: '第五条公告',
            title: '第五条公告'
        });
        await Rule.create({
            content: '第六条公告',
            title: '第六条公告'
        });
        await Rule.create({
            content: '第七条公告',
            title: '第七条公告'
        });
        await Rule.create({
            content: '第八条公告',
            title: '第八条公告'
        });
        await Rule.create({
            content: '第九条公告',
            title: '第九条公告'
        });
        await Rule.create({
            content: '第十条公告',
            title: '第十条公告'
        });
        await Rule.create({
            content: '第十一条公告',
            title: '第十一条公告'
        });
        await Rule.create({
            content: '第十二条公告',
            title: '第十二条公告'
        });


        let successMessageType = await MessageKlass.create({
            name: '成功消息'
        });
        let commonMessageType = await MessageKlass.create({
            name: '普通消息'
        });
        let failMessageType = await MessageKlass.create({
            name: '失败消息'
        });

        let successMessage = await Message.create({
            content: '这是一条成功的消息',
            isPublished: false,
            isRead: false
        });
        await successMessage.setMessageType(successMessageType);
        await successMessage.setMessageUser(user1);
        let commonMessage = await Message.create({
            content: '这是一条普通的消息',
            isPublished: false,
            isRead: false
        });
        await commonMessage.setMessageType(commonMessageType);
        await commonMessage.setMessageUser(user2);
        let failMessage = await Message.create({
            content: '这是一条有生之年系列失败的消息',
            isPublished: false,
            isRead: false
        });
        failMessage.setMessageType(failMessageType);
        await failMessage.setMessageUser(user3);
        let successMessage1 = await Message.create({
            content: '这是一条活久见成功的消息',
            isPublished: false,
            isRead: false
        });
        await successMessage1.setMessageType(successMessageType);
        await successMessage1.setMessageUser(user1);
        let commonMessage2 = await Message.create({
            content: '这是一条2333普通的消息',
            isPublished: false,
            isRead: false
        });
        await commonMessage2.setMessageType(commonMessageType);
        await commonMessage2.setMessageUser(user2);
        let failMessage3 = await Message.create({
            content: '这是一条红红红火火晃晃呼呼失败的消息',
            isPublished: false,
            isRead: false
        });
        failMessage3.setMessageType(failMessageType);
        await failMessage3.setMessageUser(user3);
        let successMessage4 = await Message.create({
            content: '这是一条失踪人口回归成功的消息',
            isPublished: false,
            isRead: false
        });
        await successMessage4.setMessageType(successMessageType);
        await successMessage4.setMessageUser(user1);
        let commonMessage5 = await Message.create({
            content: '这是一条高产似母猪的消息',
            isPublished: false,
            isRead: false
        });
        await commonMessage5.setMessageType(commonMessageType);
        await commonMessage5.setMessageUser(user2);
        let failMessage6 = await Message.create({
            content: '这是一条您预约的设备成功被别人抢走了失败的消息',
            isPublished: false,
            isRead: false
        });
        failMessage6.setMessageType(failMessageType);
        await failMessage6.setMessageUser(user3);
        let failMessage7 = await Message.create({
            content: '这是一条立浮华之世失败的消息',
            isPublished: false,
            isRead: false
        });
        failMessage7.setMessageType(failMessageType);
        await failMessage7.setMessageUser(user3);
        let failMessage8 = await Message.create({
            content: '这是一条奏天籁之音的消息',
            isPublished: false,
            isRead: false
        });
        failMessage8.setMessageType(failMessageType);
        await failMessage8.setMessageUser(user3);
        let failMessage9 = await Message.create({
            content: '这是一条你关注的微博推送了新的消息',
            isPublished: false,
            isRead: false
        });
        failMessage9.setMessageType(failMessageType);
        await failMessage9.setMessageUser(user3);
        let failMessage10 = await Message.create({
            content: '这是一条我实在想不出来编什么好的消息',
            isPublished: false,
            isRead: false
        });
        failMessage10.setMessageType(failMessageType);
        await failMessage10.setMessageUser(user3);
        let failMessage11 = await Message.create({
            content: '这是一条您已被思特沃科学院录取的消息',
            isPublished: false,
            isRead: false
        });
        failMessage11.setMessageType(failMessageType);
        await failMessage11.setMessageUser(user3);
        let failMessage12 = await Message.create({
            content: '这是一条考试永远不挂科的好消息',
            isPublished: false,
            isRead: false
        });
        failMessage12.setMessageType(failMessageType);
        await failMessage12.setMessageUser(user3);


        let computerDeviceType = await DeviceType.create({
            name: '计算机系'
        });
        let chemicalDeviceType = await DeviceType.create({
            name: '化学系'
        });
        let metallurgicalDeviceType = await DeviceType.create({
            name: '冶金系'
        });

        let device1 = await Device.create({
            name: '计算机系的仪器',
            description: '这是计算机系的仪器',
            imgFilePath: '/upload/device/device1'
        });
        await device1.setDeviceType(computerDeviceType);
        let device2 = await Device.create({
            name: '化工系的仪器',
            description: '这是化工系的仪器',
            imgFilePath: '/upload/device/device2'
        });
        await device2.setDeviceType(chemicalDeviceType);
        let device3 = await Device.create({
            name: '冶金系的仪器',
            description: '这是冶金系的仪器',
            imgFilePath: '/upload/device/device3'
        });
        await device3.setDeviceType(metallurgicalDeviceType);

        let apply1 = await Apply.create({
            vioReason: 'user1 想要用计算机系的仪器'
        });
        await apply1.setApplyer(user1);
        await apply1.setApplyDevice(device1);
        let apply2 = await Apply.create({
            vioReason: 'user2 想要用化学系的仪器'
        });
        await apply2.setApplyer(user2);
        await apply2.setApplyDevice(device2);
        let apply3 = await Apply.create({
            vioReason: 'user3 想要用冶金系的仪器'
        });
        await apply3.setApplyer(user3);
        await apply3.setApplyDevice(device3);

    } catch (err) {
        ctx.body = {
            status: 0,
            message: 'Model Entity has alread exist !! '
        }
    }
    ctx.body = {
        status: 1,
        message: 'Get Data From Test Get',
    }


}
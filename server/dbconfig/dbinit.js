const path = require('path')
const sequelize = require('../dbconfig/dbconfig')

// 这边后期应该加上啊循环自动导入model，先放着
const Apply = sequelize.import('../server/models/Apply')
const Device = sequelize.import('../server/models/Device')
const DeviceType = sequelize.import('../server/models/DeviceType')
const Message = sequelize.import('../server/models/Message')
const MessageKlass = sequelize.import('../server/models/MessageKlass')
const Rule = sequelize.import('../server/models/Rule')
const User = sequelize.import('../server/models/User')
const UserKlass = sequelize.import('../server/models/UserKlass')

Message.belongsTo(MessageKlass, {as: "messageType"} )
MessageKlass.hasOne(Message, {as: "message"})

User.belongsTo(UserKlass, {as: "userType"} )
UserKlass.hasOne(User, {as: "user"})

Device.belongsTo(DeviceType, {as: "deviceType"} )
DeviceType.hasOne(Device, {as: "device"})

Apply.belongsTo(User, {as: "applyer"} )
User.hasOne(Apply, {as: "apply"})

Apply.belongsTo(Device, {as: "applyDevice"} )
Device.hasOne(Apply, {as: "apply"})


module.exports = {
    Apply,
    Device,
    DeviceType,
    Message,
    MessageKlass,
    Rule,
    User,
    UserKlass,
    
    sequelize
}
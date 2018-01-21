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

Message.belongsTo(MessageKlass, {as: "messageType"})
User.belongsTo(UserKlass, {as: "userType"})
Device.belongsTo(DeviceType, {as: "deviceType"})
Apply.belongsTo(User, {as: "applyer"})
Apply.belongsTo(Device, {as: "applyDevice"})

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
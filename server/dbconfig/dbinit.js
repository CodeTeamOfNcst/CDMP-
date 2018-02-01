const path = require('path')
const sequelize = require('../dbconfig/dbconfig')

// 这边后期应该加上 循环自动导入model，先放着(人手不足 -_-! )
const Apply = sequelize.import('../server/models/Apply')
const Device = sequelize.import('../server/models/Device')
const DeviceType = sequelize.import('../server/models/DeviceType')
const Message = sequelize.import('../server/models/Message')
const MessageKlass = sequelize.import('../server/models/MessageKlass')
const Rule = sequelize.import('../server/models/Rule')
const User = sequelize.import('../server/models/User')
const UserKlass = sequelize.import('../server/models/UserKlass')


Message.belongsTo(MessageKlass, {
    as: "MessageType",
    foreignKey: 'message_type',
    foreignKeyContraints: false
})
MessageKlass.hasOne(Message, {
    as: "Message",
    foreignKey: 'message_type',
    foreignKeyContraints: false
})

Message.belongsTo(User, {
    as: "MessageUser",
    foreignKey: 'message_user',
    foreignKeyContraints: false
})
User.hasOne(Message, {
    as: "UserMessage",
    foreignKey: 'message_user',
    foreignKeyContraints: false
})

User.belongsTo(UserKlass, {
    as: "UserType",
    foreignKey: "user_type",
    foreignKeyContraints: false
})
UserKlass.hasOne(User, {
    as: "User",
    foreignKey: "user_type",
    foreignKeyContraints: false
})

Device.belongsTo(DeviceType, {
    as: "DeviceType",
    foreignKey: "device_type",
    foreignKeyContraints: false
})
DeviceType.hasOne(Device, {
    as: "Device",
    foreignKey: "device_type",
    foreignKeyContraints: false,
})

Apply.belongsTo(User, {
    as: "Applyer",
    foreignKey: "apply_user",
    foreignKeyContraints: false
})
User.hasOne(Apply, {
    as: "Apply",
    foreignKey: "apply_user",
    foreignKeyContraints: false
})

Apply.belongsTo(Device, {
    as: "ApplyDevice",
    foreignKey: "apply_device",
    foreignKeyContraints: false
})
Device.hasOne(Apply, {
    as: "Apply",
    foreignKey: "apply_device",
    foreignKeyContraints: false
})


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
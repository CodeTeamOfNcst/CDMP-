const path = require('path')
const sequelize = require('../dbconfig/dbconfig')


const Apply = sequelize.import('../models/Apply')
const Device = sequelize.import('../models/Device')
const DeviceType = sequelize.import('../models/DeviceType')
const Message = sequelize.import('../models/Message')
const MessageKlass = sequelize.import('../models/MessageKlass')
const Rule = sequelize.import('../models/Rule')
const User = sequelize.import('../models/User')
const UserKlass = sequelize.import('../models/UserKlass')

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
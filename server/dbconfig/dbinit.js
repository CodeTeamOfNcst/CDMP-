const Apply = require('../models/Apply')
const Device = require('../models/Device')
const DeviceType = require('../models/DeviceType')
const Message = require('../models/Message')
const MessageKlass = require('../models/MessageKlass')
const Rule = require('../models/Rule')
const User = require('../models/User')
const UserKlass = require('../models/UserKlass')

Message.belongsTo(MessageKlass, {as: "messageType"})
User.belongsTo(UserKlass, {as: "userType"})
Device.belongsTo(DeviceType, {as: "deviceType"})
Apply.belongsTo(User, {as: "applyer"})
Apply.belongsTo(Device, {as: "applyDevice"})



module.exports
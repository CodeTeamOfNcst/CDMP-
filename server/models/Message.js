const Sequelize = require('sequelize')
const connection = require('../dbconfig')

const Message = connection.define(
    'Message',
    {
        id: { type: Sequelize.INTERGRE, primaryKey: true, autoIncrement: true},
        content: { type: Sequelize.TEXT, allowNull: true},
        publishDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
        isPublished: { type: Sequelize.BOOLEAN, defaultValue: true },
        isUse: {type: Sequelize.BOOLEAN, defaultValue: true},
        //默认添加 createAt 和 updateAt 两个字段 
    }
)

module.exports = Message
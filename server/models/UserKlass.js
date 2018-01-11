const Sequelize = require('sequelize')
const connection = require('../dbconfig/dbconfig')

const UserKlass = connection.define(
    'UserKlass',
    {
        id: { type: Sequelize.INTEGRE, primaryKey: true, autoIncrement: true },
        isUse: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true},
        name: { type: Sequelize.STRING, allowNull: true, unique: true },
        //默认添加 createAt 和 updateAt 两个字段 
    }
)

module.exports = UserKlass
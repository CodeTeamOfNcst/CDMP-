const Sequelize = require('sequelize')
const connection = require('../dbconfig')

const DeviceType = connection.define(
    'DeviceType',
    {
        id: { type: Sequelize.INTEGRE, primaryKey: true, autoIncrement: true },
        name: { type: Sequelize.STRING, allowNull: true, unique: true},
        isUse: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true }
    }
)

module.exports = DeviceType
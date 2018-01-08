const Sequelize = require('sequelize')
const connection = require('../dbconfig')

const User = connection.define(
    'User',
    {
        id: { type: Sequelize.INTEGRE, primaryKey: true, autoIncrement: true },
        account: { type: Sequelize.STRING, allowNull: false, unique: true },
        password: { type: Sequelize.STRING, allowNull: false },
        name: { type: Sequelize.STRING, allowNull: true, unique: true },
        phone: { type: Sequelize.STRING, allowNull: true, unique: true },
        email: { type: Sequelize.STRING, allowNull: true, unique: true },
        isUse: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true},
    }
)

module.exports = User
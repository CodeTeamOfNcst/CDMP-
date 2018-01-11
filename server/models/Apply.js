const Sequelize = require('sequelize')
const connection = require('../dbconfig/dbconfig')

const Apply = connection.define(
    'Apply',
    {
        id: { type: Sequelize.INTEGRE, primaryKey: true, autoIncrement: true },
        submitDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
        startDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
        endDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
        isAgree: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
        vioReason: { type: Sequelize.STRING, allowNull: true },
        isUse: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true }
    }
)

module.exports = Apply
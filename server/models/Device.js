const Sequelize = require('sequelize')
const connection = require('../dbconfig/dbconfig')

const Device = connection.define(
    'Device',
    {
        id: { type: Sequelize.INTEGRE, primaryKey: true, autoIncrement: true },
        name: { type: Sequelize.STRING, allowNull: true, unique: true },
        imgFilePath: { type: Sequelize.STRING, allowNull: true },
        description: { type: Sequelize.STRING, allowNull: true },
        dType: { type: Sequelize.STRING, allowNull: true },
        purchaseDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
        needRepair: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
        canReserve: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
        isUse: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true }
    }
)

module.exports = Device
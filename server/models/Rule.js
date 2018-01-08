const Sequelize = require('sequelize')
const connection = require('../dbconfig')

const Rule = connection.define(
    'Rule',
    {
        id: { type: Sequelize.INTEGRE, primaryKey: true, autoIncrement: true },
        publishDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
        content: { type: Sequelize.TEXT, allowNull: true},
        isPublished: { type: Sequelize.BOOLEAN, defaultValue: true },
        isUse: {type: Sequelize.BOOLEAN, defaultValue: true}
    }
)

module.exports = Rule
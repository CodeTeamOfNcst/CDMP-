module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'Rule',
        {
            id: { type: DataTypes.INTEGRE, primaryKey: true, autoIncrement: true },
            publishDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
            content: { type: DataTypes.TEXT, allowNull: true},
            isPublished: { type: DataTypes.BOOLEAN, defaultValue: true },
            isUse: {type: DataTypes.BOOLEAN, defaultValue: true}
        }
    )
}
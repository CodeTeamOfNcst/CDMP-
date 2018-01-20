module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'Message',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            content: { type: DataTypes.TEXT, allowNull: true},
            publishDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
            isPublished: { type: DataTypes.BOOLEAN, defaultValue: true },
            isRead: {type: DataTypes.BOOLEAN, defaultValue: true},
            isUse: {type: DataTypes.BOOLEAN, defaultValue: true},
            //默认添加 createAt 和 updateAt 两个字段 
        }
    )
}
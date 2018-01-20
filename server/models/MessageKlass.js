module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'MessageKlass',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            isUse: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true},
            name: { type: DataTypes.STRING, allowNull: true, unique: true},
            //默认添加 createAt 和 updateAt 两个字段 
        }
    )
}
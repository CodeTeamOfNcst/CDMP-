/**
 * 设备类别表
 * @param { [object] } sequelize 
 * @param { [object] } DataTypes 
 * a foreign_key of { Device }  每种设备含有一个设备分类的外键
 */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'DeviceType', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: true
            }, // 分类名称(暂时以院系做分类)
            isUse: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true
            } // 此条记录是否可用
            //默认添加 createAt 和 updateAt 两个字段 
        }
    )
}
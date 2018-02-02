const moment = require('moment');
/**
 * 设备表
 * @param { [object] } sequelize 
 * @param { [object] } DataTypes 
 * @foreign_key { DeviceKlass }  每条消息含有一个消息分类的外键
 */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'Device', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            }, //设备名称
            imgFilePath: {
                type: DataTypes.STRING,
                allowNull: true
            }, //设备图片
            description: {
                type: DataTypes.STRING,
                allowNull: true
            }, //设备描述
            purchaseDate: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
                get() {
                    return moment(this.getDataValue('purchaseDate')).format('YYYY-MM-DD');
                }
            }, //设备购买日期
            needRepair: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            }, //设备是否需要维护
            canReserve: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true
            }, // 设备是否能够被预约（给大佬预留的位置）
            isUse: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true
            } //此条记录是否可用
            //默认添加 createAt 和 updateAt 两个字段 
        }
    )
}
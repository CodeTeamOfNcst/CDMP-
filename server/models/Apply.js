
/**
 * 用户设备申请表 
 * @param { [object] } sequelize 
 * @param { [object] } DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'Apply',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            startDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }, //申请开始使用时间
            endDate: { type: DataTypes.DATE, allowNull:true }, //申请结束使用时间
            isAgree: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }, //是否批准(默认不同意)
            vioReason: { type: DataTypes.STRING, allowNull: true }, //使用原因
            isUse: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true } // 此条记录是否可用
            //默认添加 createAt 和 updateAt 两个字段 
        }
    )
}
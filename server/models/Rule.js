/**
 * 公告表
 * @param { [object] } sequelize 
 * @param { [object] } DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'Rule',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            publishDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }, //公告正式发布的日期
            content: { type: DataTypes.TEXT, allowNull: true}, //公告的具体内容 （后期改为富文本？待定）
            isUse: {type: DataTypes.BOOLEAN, defaultValue: true}  //此条记录是否可用
            //默认添加 createAt 和 updateAt 两个字段 
        }
    )
}
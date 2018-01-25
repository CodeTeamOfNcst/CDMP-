/**
 * 用户类别表
 * @param { [object] } sequelize 
 * @param { [object] } DataTypes 
 * a foreign_key of { User }  每个用户含有一个用户分类的外键
 */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'UserKlass',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, 
            isUse: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true}, // 此条记录是否可用
            name: { type: DataTypes.STRING, allowNull: true, unique: true },  // 类别名称（暂时只分管理员和普通用户两级）
            //默认添加 createAt 和 updateAt 两个字段 
        }
    )
}
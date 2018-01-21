/**
 * 消息类别表
 * @param { [object] } sequelize 
 * @param { [object] } DataTypes 
 * a foreign_key of { Message }  每条消息含有一个消息分类的外键
 */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'MessageKlass',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
            isUse: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true}, //此条记录是否可用
            name: { type: DataTypes.STRING, allowNull: true, unique: true}, //消息类别（普通，成功，失败）
            //默认添加 createAt 和 updateAt 两个字段 
        }
    )
}
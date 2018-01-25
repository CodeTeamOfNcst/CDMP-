/**
 * 消息表
 * @param { [object] } sequelize 
 * @param { [object] } DataTypes 
 * @foreign_key { MessageKlass }  每条消息含有一个消息分类的外键
 */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'Message',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            content: { type: DataTypes.TEXT, allowNull: true}, // 消息内容
            publishDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }, //推送日期
            isPublished: { type: DataTypes.BOOLEAN, defaultValue: false },  // 消息是否已经被推送， 默认为false
            isRead: {type: DataTypes.BOOLEAN, defaultValue: false}, //消息是否被读到 （用户登陆后并且标记后才被置为true）
            isUse: {type: DataTypes.BOOLEAN, defaultValue: true}, // 此条记录是否可用
            //默认添加 createAt 和 updateAt 两个字段 
        }
    )
};
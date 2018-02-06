import {
    Message,
    MessageKlass,
    User,
    UserKlass
} from '../dbconfig/dbinit'
import { Op } from 'sequelize'
const ItemPerPage = 10;
exports.addMessage = async (ctx, next) => {
    let message = ctx.request.body.message;
    try {
        if(!message.selected_user.lenght && 
            !(message.selected_user.lenght === 0)) throw("未选择用户")
        for (let index in message.selected_user) {
            let newMessage = await Message.create({
                publishDate: message.publishDate,
                isUse: message.isUse,
                isRead: message.isRead,
                isPublished: message.isPublished,
                content: message.content
            });
            let messageType = await MessageKlass.findOne({
                where: {
                    id: message.type
                }
            });
            let messageUser = await User.findOne({
                where: {
                    id: message.selected_user[index].split('-')[0]
                }
            });
            await newMessage.setMessageType(messageType);
            await newMessage.setMessageUser(messageUser);
            await newMessage.save();
            ctx.body = {
                status: 1,
                message: '消息创建成功'
            }
        }
    } catch (err) {
        ctx.body = {
            status: 0,
            message: `创建失败，由于 ${err}`
        }
    }
    
};

exports.deletseMessageById = async (ctx, next) => {
    let messageId = ctx.request.body.id
    try {
        let thisMessage = await Message.findOne({
            where: {
                id: messageId
            }
        })
        await thisMessage.update({
            isUse: false
        })
        await thisMessage.save()
        ctx.body = {
            status: 1,
            message: '禁用成功'
        }
    } catch (err) {
        ctx.body = {
            status: 0,
            message: `禁用失败 由于 ${err}`
        }
    }
    
};

exports.modifyMessageById = async (ctx, next) => {
    let postData = ctx.request.body.message;
    try {
        let thisMessage = await Message.findOne({
            where: {
                id: postData.id
            }
        });
        let thisMessageType = await MessageKlass.findOne({
            where: {
                id: postData.type
            }
        });
        await thisMessage.update({
            publishDate: postData.publishDate,
            content: postData.content,
            isPublished: postData.isPublished,
            isRead: postData.isRead,
            isUse: postData.isUse
        });
        await thisMessage.setMessageType(thisMessageType);
        await thisMessage.save()
        ctx.body = {
            status: 1,
            message: '更新成功'
        }
    } catch (err) {
        ctx.body = {
            status: 0,
            message: `更新失败， 由于${err}`
        }
    }
    
};

/**
 * 获取所有消息及相关内容
 *
 */
exports.getAllMessage = async (ctx, next) => {

    let messages = await Message.findAll({
        offset: (parseInt(ctx.params.page || 1) - 1) * ItemPerPage,
        limit: ItemPerPage
    });
    let messageTypes = await MessageKlass.findAll()
    let Messages = [];
    // 格式化返回的数据
    for (let index in messages) {
        let messageType = await messages[index].getMessageType();
        let messageUser = await messages[index].getMessageUser();
        Messages.push({
            message: messages[index],
            messageTypeName: messageType.name,
            messageUserName: messageUser.name
        });
    }
    let count = await Message.count()
    ctx.body = {
        counts: count,
        MessageTypes: messageTypes,
        Messages: Messages,
        status: 1,
        message: '成功获取信息'
    }
    
};

exports.getMessageById = async (ctx, next) => {
    let messageId = ctx.request.body.id;
    try {
        let thisMessage = await Message.findOne({
            where: {
                id: messageId
            }
        });
        let thisMessageTpe = await thisMessage.getMessageType();
        let thisMessageUser = await thisMessage.getMessageUser();
        ctx.body = {
            thisMessage: thisMessage,
            user: thisMessageUser.name,
            type: thisMessageTpe.id,
            status: 1,
            message: '查询成功'
        }
    } catch (err) {
        ctx.body = {
            status: 1,
            message: `查询失败 由于 ${err}`
        }
    }
    
};

exports.messageSearch = async (ctx, next) => {
    let search = ctx.request.body.search
    try{
        let searchResult = await Message.findAll({
            where: {content:{ [Op.like] : `%${search}%`}}
        })
        if(! searchResult || searchResult.length === 0) throw("未匹配到结果")
        let result = []
        for(let i=0;i<searchResult.length; i++){
            result.push({
                message: searchResult[i],
                messageTypeName: (await searchResult[i].getMessageType()).name,
                messageUserName: (await searchResult[i].getMessageUser()).name
            })
        }
        ctx.body = {
            result: result,
            status: 1,
            message: 'success'
        }
    }catch(err){
        ctx.body = {
            status: 0,
            message: `${err}`
        }
    }
}
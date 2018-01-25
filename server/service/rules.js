import { Rule } from '../dbconfig/dbinit'
import moment from "moment";

exports.addRule = async ( ctx, next ) => {
    let postData = ctx.request.body
    try{
        let newRule = await Rule.create({
            publishDate: postData.rule.publishDate,
            title: postData.rule.title,
            content: postData.rule.content,
            isUse: postData.rule.isUse
        })
        await newRule.save()
        ctx.body = {
            status: 1,
            message: '添加成功'
        }
    }catch (err){
        ctx.body = {
            status: 1,
            message: `添加失败 由于 ${ err }`
        }
    }

};

exports.getAllRules = async ( ctx, next ) => {
    let rules = await Rule.findAll()
    try{
        let rulesDetail = []
        for(let i = 0; i < rules.length; i++){
            rulesDetail.push({
                id: rules[i].id,
                title: rules[i].title,
                content: rules[i].content,
                isUse: rules[i].isUse ? '可用': '禁用',
                publishDate: moment(rules[i].publishDate).format('YYYY-MM-DD'),
            })
        }
        ctx.body = {
            rulesDetail: rulesDetail,
            status: 1,
            message: '从服务端获取所有数据成功'
        }
    }catch (err){
        ctx.body = {
            rulesDetail: null,
            status: 1,
            message: '从服务端获取数据异常'
        }
    }

};

exports.getRuleById = async ( ctx, next ) => {
    let ruleId = ctx.request.body.id
    try{
        let thisRule = await Rule.findOne({where: {id: ruleId}})
        let rule = {
            id: thisRule.id,
            publishDate: moment(thisRule.publishDate).format('YYYY-MM-DD'),
            title: thisRule.title,
            content: thisRule.content,
            isUse: thisRule.isUse
        }
        ctx.body = {
            rule: rule,
            status: 1,
            message: '成功获取信息'
        }
    }catch (err){
        ctx.body = {
            status: 0,
            message: `获取信息失败， 由于 ${err}`
        }
    }
};

exports.modifyRule = async ( ctx, next ) => {
    let rule = ctx.request.body.rule;
    try{
        let thisRule = await Rule.findOne({where: {id: rule.id}})
        await thisRule.update({
            publishDate: rule.publishDate,
            title: rule.title,
            content: rule.content,
            isUse: rule.isUse
        })
        await thisRule.save()
        ctx.body = {
            status: 1,
            message: '修改成功'
        }
    }catch(err){
        ctx.body = {
            status: 0,
            message: `更新失败，由于 ${ err }`
        }
    }


};

exports.deleteRule = async ( ctx, next ) => {
    let rule_id = ctx.request.body.id;
    try{
        let thisRule = await Rule.findOne({ where: {id: rule_id }});
        await thisRule.update({ isUse:false })
        await thisRule.save();
        ctx.body = {
            status: 1,
            message: '成功禁用'
        }
    }catch (err){
        ctx.body = {
            status: 0,
            message: `服务端异常 原因：${ err }`
        }
    }
};


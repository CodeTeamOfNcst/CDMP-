import { Rule, sequelize } from '../dbconfig/dbinit'
import moment from "moment";

exports.addRule = async ( ctx, next ) => {

}

exports.getAllRules = async ( ctx, next ) => {
    let rules = await Rule.findAll()

    console.log(rules)
    let rulesDetail = []
    for(let i = 0; i < rules.length; i++){
        rulesDetail.push({
            date: moment(rules[i].publishDate).format('YYYY-MM-DD'),
            name: rules[i].title,
            disable: rules[i].isUse ? '可用': '禁用'
        })
    }
    ctx.body = {
        rulesDetail: rulesDetail
    }
}

exports.getRulesById = async ( ctx, next ) => {

}

exports.modifyRule = async ( ctx, next ) => {

}

exports.deleteRule = async ( ctx, next ) => {
    
}
import Sequelize from 'sequelize'

/**
 * 找到或创建model
 * @param { [object] } Model 需要操作的模型
 * @param { [json] } Condition 查询条件，不存在则直接为创建条件
 */
exports.getOrCreate = async (Model, Condition) => {
    try {
        return await Model.findOne({ where: Condition })
    }catch(err){
        console.log('Model entity doesn\'t exist')
        return await Model.create( Condition )
    }
}
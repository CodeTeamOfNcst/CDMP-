import Sequelize from 'sequelize'

/**
 * 查询对应的 model， 若不存在则创建
 * @param { [object] } Model 需要操作的模型
 * @param { [json] } Condition 查询条件，不存在则直接为创建条件
 */
exports.getOrCreate = async (Model, Condition,) => {
    try {
        return await Model.findOne(
            {
                { where: Condition }, 
                {include: }
            })
    }catch(err){
        console.err('Model entity doesn\'t exist', err)
        return await Model.create( Condition )
    }
}
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'DeviceType',
        {
            id: { type: DataTypes.INTEGRE, primaryKey: true, autoIncrement: true },
            name: { type: DataTypes.STRING, allowNull: true, unique: true},
            isUse: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true }
        }
    )
}
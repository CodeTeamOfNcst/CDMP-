module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'Device',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            name: { type: DataTypes.STRING, allowNull: true, unique: true },
            imgFilePath: { type: DataTypes.STRING, allowNull: true },
            description: { type: DataTypes.STRING, allowNull: true },
            dType: { type: DataTypes.STRING, allowNull: true },
            purchaseDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
            needRepair: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
            canReserve: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
            isUse: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true }
        }
    )
}
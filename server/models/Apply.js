module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'Apply',
        {
            id: { type: DataTypes.INTEGRE, primaryKey: true, autoIncrement: true },
            submitDate: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
            startDate: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
            endDate: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
            isAgree: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
            vioReason: { type: DataTypes.STRING, allowNull: true },
            isUse: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true }
        }
    )
}
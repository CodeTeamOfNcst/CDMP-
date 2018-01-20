module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'Apply',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            submitDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
            startDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
            endDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
            isAgree: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
            vioReason: { type: DataTypes.STRING, allowNull: true },
            isUse: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true }
        }
    )
}
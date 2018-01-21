module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'User',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            account: { type: DataTypes.STRING, allowNull: false, unique: true },
            password: { type: DataTypes.STRING, allowNull: false },
            name: { type: DataTypes.STRING, allowNull: true },
            phone: { type: DataTypes.STRING, allowNull: true },
            email: { type: DataTypes.STRING, allowNull: true },
            isUse: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true},
        }
    )
}

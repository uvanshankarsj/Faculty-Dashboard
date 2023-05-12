const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        userId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        avatar: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        hasAnokhaPassport: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    });
}
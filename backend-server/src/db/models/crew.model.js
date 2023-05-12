const {DataTypes} = require('sequelize');
const {department, eventType} = require('../constant');

module.exports = (sequelize) => {
    sequelize.define('crew', {
        crewId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        department: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                isIn: [...department]
            }
        },
        role: {
            allowNull: false,
            type: DataTypes.STRING,
        }
    });
}   

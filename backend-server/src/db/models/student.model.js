const { DataTypes } = require('sequelize');
const {year, department} = require('../constant');

module.exports = (sequelize) => {
    sequelize.define('student', {
        studentId: {
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
        department: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                isIn: [[...department]]
            }
        },
        year: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                isIn: [[...year]]
            }
        },
        rollNumber: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true,
        },
        phoneNumber: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true,
        },
    });
}
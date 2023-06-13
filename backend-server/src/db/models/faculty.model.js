const { DataTypes } = require('sequelize');
const { department,designation } = require('../constant');

module.exports = (sequelize) => {
    sequelize.define('faculty', {
        facultyId: {
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
        department: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                isIn: [[...department]]
            }
        },
        designation: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                isIn: [[...designation]]
            }
        },
        phoneNumber: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true,
        },
        papers: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        publications: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        citations: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        projects: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
    });
}
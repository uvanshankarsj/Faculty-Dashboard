const { DataTypes } = require('sequelize');
const {department,courseMode,courseStatus,courseType} = require('../constant');

module.exports = (sequelize) => {
    sequelize.define('course', {
        courseId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        courseName: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        courseCode: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        courseDescription: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        courseDepartment: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                isIn: [...department]
            }
        },
        courseStartDate: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        courseEndDate: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        courseCredits: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        courseMode: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                isIn: [...courseMode]
            }
        },
        courseType: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                isIn: [...courseType]
            }
        },
        courseStatus: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                isIn: [...courseStatus]
            }
        },
})}
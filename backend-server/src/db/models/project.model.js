const { DataTypes } = require('sequelize');
const {department,projectType,projectStatus} = require('../constant');

module.exports = (sequelize) => {
    sequelize.define('project', {
        projectId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        projectTitle: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        projectDescription: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        projectDomain: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                isIn: [[...department]]
            }
        },
        projectStartDate: {
            allowNull: false,
            type: DataTypes.DATEONLY,
        },
        projectEndDate: {
            allowNull: false,
            type: DataTypes.DATEONLY,
        },
        projectType: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                isIn: [[...projectType]]
            }
        },
        projectStatus: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                isIn: [[...projectStatus]]
            }
        },
        MentorId:{
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        MentorName:{
            allowNull: false,
            type: DataTypes.STRING,
        },
})};
const { DataTypes } = require('sequelize');
const {department,courseMode,courseStatus,courseType,year,section,semester} = require('../constant');

module.exports = (sequelize) => {
    sequelize.define('assign', {
        courseID: {
            allowNull: false,
            type: DataTypes.INTEGER,
            unique: true,
        },
        facultyID: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        semester: {
            allowNull: false,
            type: DataTypes.INTEGER,
            validate: {
                isIn: [[...semester]]
            }
        },
        year: {
            allowNull: false,
            type: DataTypes.INTEGER,
            validate: {
                isIn: [[...year]]
            }
        },
        section: {
            allowNull: false,
            type: DataTypes.CHAR,
            validate: {
                isIn: [[...section]]
            }
        },
        facultyName: {
            allowNull: false,
            type: DataTypes.STRING
        },
        courseName: {  
            allowNull: false,
            type: DataTypes.STRING
        },
        department: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                isIn: [[...department]]
            }
        },
        courseMode: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                isIn: [[...courseMode]]
            }
        },
        courseType: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                isIn: [[...courseType]]
            }
        },
        courseStatus: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                isIn: [[...courseStatus]]
            }
        },
})}
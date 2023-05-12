const { DataTypes } = require('sequelize');
const {department, eventType} = require('../constant');


module.exports = (sequelize) => {
	sequelize.define('events', {
		eventId: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        description: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        date: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        type: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                isIn: [...eventType]
            },
        },
        venue: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        startTime: {
            allowNull: false,
            type: DataTypes.TIME,
        },
        endTime: {
            allowNull: false,
            type: DataTypes.TIME,
        },
		department: {
			allowNull: false,
			type: DataTypes.STRING,
            validate:{
                isIn: [...department]
            }
        },
        isStarred: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        day : {
            allowNull: false,
            type: DataTypes.STRING,
        },
        status: {
            allowNull: false,
            type: DataTypes.STRING,
            defaultValue: "Pending",
        },
    });
};
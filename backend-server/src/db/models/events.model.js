const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('events', {
		eventId: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
        facultyId: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        date: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        startTime: {
            allowNull: false,
            type: DataTypes.TIME,
        },
        endTime: {
            allowNull: false,
            type: DataTypes.TIME,
        },
        isStarred: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },

    });
};
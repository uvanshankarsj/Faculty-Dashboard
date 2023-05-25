const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('starredevents', {
        eventId: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        facultyId: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            },
        },
        eventName: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    });
}
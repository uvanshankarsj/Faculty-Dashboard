const {DataTypes} = require('sequelize');
const {eventType} = require('../constant');

module.exports = (sequelize) => {
    sequelize.define('starredevents', {
        eventId: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        userId: {
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
        eventType: {
            allowNull: false,
            type : DataTypes.STRING,
            validate: {
                isIn: [...eventType]
            }
        }
    });
}
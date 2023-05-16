const { DataTypes } = require('sequelize');
const {adminDepartment} = require('../constant');


module.exports = (sequelize) => {
    sequelize.define('admin', {
        adminId: {
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
                isIn: [...adminDepartment]
            }
        },
    });
}

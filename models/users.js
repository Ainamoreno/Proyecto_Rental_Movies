const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');

class User extends Model { };

User.init({
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    userName: DataTypes.STRING,
    dateBirth: DataTypes.DATE,
    phone: DataTypes.STRING
},
{
    sequelize,
    modelName: 'users',
    freezeTableName: true,
    timestamps: false
});

module.exports = User
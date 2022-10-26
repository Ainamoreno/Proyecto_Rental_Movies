const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');

class Rental extends Model { };

Rental.init({
    rentalId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
})

module.exports = Rental
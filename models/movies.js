const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');

class Movie extends Model { };

Movie.init({
    movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    movieName: DataTypes.STRING,
    description: DataTypes.TEXT
},
{
    sequelize,
    modelName: 'movies',
    freezeTableName: true,
    timestamps: false
})

module.exports = Movie
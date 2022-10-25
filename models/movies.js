const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');

class Movie extends Model { };

Movie.init({
    movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    movieName: DataTypes.STRING,
    descriptionMovie: DataTypes.TEXT,
    premiereMovie: DataTypes.DATE
},
{
    sequelize,
    modelName: 'movie',
    freezeTableName: true,
    timestamps: false
});

module.exports = Movie
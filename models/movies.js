'use strict';
const {
  Model
} = require('sequelize');
const articles = require('./articles');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.belongsTo(models.articles, {
        foreignKey: {
          name: 'id_article',
          allowNull: false
        }
      }
        );
    }
  }
  Movie.init({
    id_movie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
      
    },
    genre: DataTypes.STRING,
    // id_article: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // }
  },
    {
      sequelize,
      modelName: 'movies',
      timestamps: false
    });
  return Movie;
};
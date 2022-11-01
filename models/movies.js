'use strict';
const {
  Model
} = require('sequelize');
const articles = require('./articles');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      movies.belongsTo(models.articles, {
        foreignKey: 'id_article'
      });
    }
  }
  movies.init({
    id_movie: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    genre: DataTypes.ENUM('acción', 'terror', 'suspense', 'aventura', 'animación', 'comedia', 'drama', 'fantasía', 'historia', 'música', 'misterio', 'ciencia ficción'),
    id_article: {
      type: DataTypes.INTEGER,
      references: {
        model: 'articles',
        key: 'id_article'
      }
    },
    articleIdArticle: DataTypes.INTEGER
  },
    {
      sequelize,
      modelName: 'movies',
    });
  return movies;
};
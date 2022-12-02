"use strict";
const { Model } = require("sequelize");
const movies = require("./movies");
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Article.belongsToMany(models.rentals, {
        through: "rentals_articles",
        foreingKey: {
          name: "id_article",
        },
      });
    }
  }
  Article.init(
    {
      id_article: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
      photo: DataTypes.STRING,
      score: DataTypes.DECIMAL(10, 1),
      description: DataTypes.TEXT,
      data_premiere: {
        type: DataTypes.DATEONLY,
      },
      type: DataTypes.ENUM("Película", "Serie"),
      price: DataTypes.DECIMAL(10, 2),
    },
    {
      sequelize,
      modelName: "articles",
      timestamps: false,
    }
  );
  return Article;
};

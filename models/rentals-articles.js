'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rentals_articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rentals - articles.init({
    id_rental_article: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    id_article: {
      type: DataTypes.INTEGER,
      references: {
        model: 'articles',
        key: 'id_article'
      }
    },
    id_rental: {
      type: DataTypes.INTEGER,
      references: {
        model: 'rentals',
        key: 'id_rental'
      }
    }
  },
    {
      sequelize,
      modelName: 'rentals_articles',
    });
  return rentals - articles;
};
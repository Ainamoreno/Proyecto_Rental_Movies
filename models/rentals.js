'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rental.init({
    id_rental: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_article: {
      type: DataTypes.INTEGER,
      references: {
        model: 'articles',
        key: 'id_article'
      }
    },
    id_user: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id_user'
      }
    }
  },
    {
      sequelize,
      modelName: 'rentals',
    });
  return rental;
};
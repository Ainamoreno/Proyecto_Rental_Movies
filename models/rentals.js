'use strict';
let date = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`;
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Rental.belongsToMany(models.articles, {
        through: 'rentals_articles',
        foreignKey: 'id_rental'
      })
      Rental.belongsTo(models.users, {
        foreignKey: {
          name: "id_user",
          allowNull: false
        }
      })
      // Rental.hasOne(models.rentals_articles);
    }
  }
  Rental.init({
    id_rental: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_rental: {
      type: DataTypes.DATEONLY,
      defaultValue: date,
 
    },
    date_return: {
      type: DataTypes.DATEONLY,
      defaultValue: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()+7}`
    }
  },
    {
      sequelize,
      modelName: 'rentals',
    });
  return Rental;
};

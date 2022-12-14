'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.rentals,
        {
          foreignKey: {
            name: "id_user",
            allowNull: false
          }
        }
      )
      // User.belongsToMany(models.roles,
      //   {
      //     foreignKey: {
      //       name: "nameRol"
      //     }
      //   }
      // );
    }
  }
  User.init({
    id_user: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    phone: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
    {
      sequelize,
      modelName: 'users',
    });
  return User;
};
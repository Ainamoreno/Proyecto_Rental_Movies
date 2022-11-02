'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
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
    } ,
    dateBirth: DataTypes.DATEONLY,
    phone: {
      type: DataTypes.STRING,
      unique: true
    } 
  },
    {
      sequelize,
      modelName: 'users',
    });
  return users;
};
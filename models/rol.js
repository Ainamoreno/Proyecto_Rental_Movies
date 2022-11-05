'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Rol.hasMany(models.users, {
        foreignKey: {
          name: "id_rol",
          allowNull: false
        }
      })
    }
  }
  Rol.init({
    id_rol: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nameRol: DataTypes.STRING
  },
    {
      sequelize,
      modelName: 'rols',
      timestamps: false
    });
  return Rol;
};
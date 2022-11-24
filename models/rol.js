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
          name: "name_rol",
          defaultValue: 'Usuario'
        }
      })
    }
  }
  Rol.init({
    name_rol: {
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: 'Usuario'
    },
    id_rol: {
      type:DataTypes.STRING,
    }
  },
    {
      sequelize,
      modelName: 'rols',
      timestamps: false
    });
  return Rol;
};
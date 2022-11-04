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
      // Rol.hasMany(models.users, {
      //   foreignKey: {
      //     name: "id_rol",
      //     allowNull: false
      //   }
      // })
    }
  }
  Rol.init({
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nameRol: DataTypes.STRING
  },
    {
      sequelize,
      modelName: 'roles',
      timestamps: false
    });
  return Rol;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class series extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  series.init({
    id_serie: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nameSerie: DataTypes.STRING,
    photo: DataTypes.STRING,
    score: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    data_premiere: DataTypes.DATEONLY,
    next_episode: DataTypes.DATEONLY
  }, 
  {
    sequelize,
    modelName: 'series',
  });
  return series;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  movies.init({
    id_movie: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nameMovie: DataTypes.STRING,
    photo: DataTypes.STRING,
    score: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    data_premiere: DataTypes.DATEONLY
  }, 
  {
    sequelize,
    modelName: 'movies',
  });
  return movies;
};
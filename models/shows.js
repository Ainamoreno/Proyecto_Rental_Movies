'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Show.belongsTo(models.articles, {
        foreignKey: {
          name: 'id_article',
          allowNull: false
        }
      })
    }
  }
  Show.init({
    id_serie: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    next_episode: DataTypes.DATEONLY,
    permit: DataTypes.BOOLEAN,
    // id_article: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // }
  }, 
  {
    sequelize,
    modelName: 'shows',
    timestamps: false
  });
  return Show;
};
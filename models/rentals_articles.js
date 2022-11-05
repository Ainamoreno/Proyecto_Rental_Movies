'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Rentals_Articles extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) { 
            Rentals_Articles.belongsTo(models.articles)
        }
    }
    Rentals_Articles.init({
        id_rental_article: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true

        },
        id_rental: {
            type: DataTypes.INTEGER
        },
        articleIdArticle: {
            type: DataTypes.INTEGER
        }
    },
        {
            sequelize,
            modelName: 'rentals_articles',
            timestamps: false
        });
    return Rentals_Articles;
};
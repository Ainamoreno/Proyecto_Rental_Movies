'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rentals_articles', {
      id_rental_article: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_article: {
        type: Sequelize.INTEGER,
        references: {
          model: 'articles',
          key: 'id_article'
        }
      },
      id_rental: {
        type: Sequelize.INTEGER,
        references: {
          model: 'rentals',
          key: 'id_rental'
        },
      },
      rentalIdRental: Sequelize.INTEGER,
      articleIdArticle: Sequelize.INTEGER
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rentals_articles');
  }
};
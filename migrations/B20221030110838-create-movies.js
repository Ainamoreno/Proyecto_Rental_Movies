'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies', {
      id_movie: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      genre: {
        type: Sequelize.STRING
      },
      id_article: {
        type: Sequelize.INTEGER,
        references: {
          model: "articles",
          key: "id_article"
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      // articleIdArticle: Sequelize.INTEGER
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies');
  }
};
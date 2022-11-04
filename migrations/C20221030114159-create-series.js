'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('shows', {
      id_serie: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      next_episode: {
        type: Sequelize.DATEONLY
      },
      permit: {
        type: Sequelize.BOOLEAN
      },
      id_article: {
        type: Sequelize.INTEGER,
        references: {
          model: "articles",
          key: "id_article"
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('shows');
  }
};
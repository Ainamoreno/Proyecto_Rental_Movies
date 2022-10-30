'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('series', {
      id_serie: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameSerie: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      score: {
        type: Sequelize.DECIMAL(10,2)
      },
      description: {
        type: Sequelize.TEXT
      },
      data_premiere: {
        type: Sequelize.DATEONLY
      },
      next_episode: {
        type: Sequelize.DATEONLY
      },
      permit: {
        type: Sequelize.ENUM('teatro', 'cine')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('series');
  }
};
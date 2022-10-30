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
      nameMovie: {
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
      genre: {
        type: Sequelize.ENUM('acción', 'terror', 'suspense', 'aventura', 'animación', 'comedia', 'drama', 'fantasía', 'historia', 'música', 'misterio', 'ciencia ficción')
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
    await queryInterface.dropTable('movies');
  }
};
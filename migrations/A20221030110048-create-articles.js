'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('articles', {
      id_article: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type:Sequelize.STRING,
        unique: true
      }, 
      photo: Sequelize.STRING,
      score: Sequelize.DECIMAL(10,1),
      description: Sequelize.TEXT,
      data_premiere: Sequelize.DATEONLY,
      type: Sequelize.ENUM('Película', 'Serie'),
      price: Sequelize.DECIMAL(10,2)
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('articles');
  }
};
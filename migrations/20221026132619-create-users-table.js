'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      userName: Sequelize.STRING,
      dateBirth: Sequelize.DATE,
      phone: Sequelize.STRING
    });

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

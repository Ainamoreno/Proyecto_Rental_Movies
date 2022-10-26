'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        userId: 1,
        userName: "Aina Moreno Carceller",
        dateBirth: "1998-07-19",
        phone: "223345986"
      },
      {
        userId: 2,
        userName: "Alicia Gómez Esteve",
        dateBirth: "2000-11-26",
        phone: "223355556"
      },
      {
        userId: 3,
        userName: "Jesús García Crescencio",
        dateBirth: "1995-05-24",
        phone: "648345986"
      },
      {
        userId: 4,
        userName: "Lola Martorell Pérez",
        dateBirth: "1990-03-19",
        phone: "223005986"
      },
      {
        userId: 5,
        userName: "Cristian Rodríguez García",
        dateBirth: "1999-12-02",
        phone: "223008886"
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

'use strict';
let date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id_user: 1,
        name: "Aina Moreno Carceller",
        dateBirth: "1998-07-19",
        phone: "223345986",
        email: 'prueba@gmail.com',
        password: "774949sfsnkfbjGHGHbjsf566875hhgA",
        id_rol: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id_user: 2,
        name: "Alicia Gómez Esteve",
        dateBirth: "2000-11-26",
        phone: "223355556",
        email: 'alicia@gmail.com',
        password: "7749ttSFLSNFKJNA65678Bbnkdkfnkfjn5hhgA",
        id_rol: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id_user: 3,
        name: "Jesús García Crescencio",
        dateBirth: "1995-05-24",
        phone: "648345986",
        email: 'jesus@gmail.com',
        password: "77494sfjnkasfjnakjsnGFGHJ45678995hhgA",
        id_rol: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id_user: 4,
        name: "Lola Martorell Pérez",
        dateBirth: "1990-03-19",
        phone: "223005986",
        email: 'lola@gmail.com',
        password: "77494sfjnkasfjnaksflnsf5678snGFGHJ45678995hhgA",
        id_rol: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id_user: 5,
        name: "Cristian Rodríguez García",
        dateBirth: "1999-12-02",
        phone: "223008886",
        email: 'cristian@gmail.com',
        password: "77494sfjnkasfjn566bfnfnGFGHJ45678995hhgA",
        id_rol: 1,
        createdAt: date,
        updatedAt: date
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

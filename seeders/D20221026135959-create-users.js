'use strict';
let date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id_user: 1,
        name: "Paola Pérez Mendoza",
        email: "paola22@gmail.com",
        phone: "228297484",
        password: "$2b$10$EpPJ4oHJyQRZH1s4TEjOHeiPNu8tuiUEO9HiS6/mL/XpaXFjlHQdW",
        name_rol: 'Usuario',
        updatedAt: date,
        createdAt: date
      },
      // Password de Paola Pérez Mendoza: aa34Bbfh6
      {
        id_user: 2,
        name: "Alicia Gómez Esteve",
        email: "alicia55@gmail.com",
        phone: "223353556",
        password: "$2b$10$iQA2uDcLKmLnyXzdnW5yXe6tlbuFg58Y9aUPq2ZDnujJ4fTOCe0me",
        name_rol: 'Usuario',
        updatedAt: date,
        createdAt: date
      },
      {
        id_user: 3,
        name: "Jesús García Crescencio",
        email: "jesus55@gmail.com",
        phone: "648342986",
        password: "$2b$10$6bOl8qV.gJmSqqOHtN7fwuLQItdGsOVBJtbFo2CkZh.VIg8TvLkI.",
        name_rol: 'Usuario',
        updatedAt: date,
        createdAt: date
      },
      {
        id_user: 4,
        name: "Lola Martorell Pérez",
        email: "lola2@gmail.com",
        phone: "223001986",
        password: "$2b$10$4AxpsQ8n4UTzPSHVbXxGxef6XFE/rkx3PSqNd7D0SSLHQvEb.n4lO",
        name_rol: 'Usuario',
        updatedAt: date,
        createdAt: date
      },
      {
        id_user: 5,
        name: "Lola Martínez",
        email: "lola45@gmail.com",
        phone: "223001886",
        password: "$2b$10$4iSr2Cdb9sDro.bbifbPnuLVhWnOgH2PeUhONx4rZBF/2LGYyHEOy",
        name_rol: 'Administrador',
        updatedAt: date,
        createdAt: date
      }
      // Password de Lola Martínez: aa55bAb64
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

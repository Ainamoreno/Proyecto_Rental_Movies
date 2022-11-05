'use strict';
let date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id_user: 6,
        name: "Aina Moreno Carceller",
        email: "aina@gmail.com",
        dateBirth: "1998-07-19",
        phone: "223345586",
        password: "$2b$10$YuDsAypextct/A112PbLqO7UBPm0UHPONG5lq7/pgZTsPRxxrbWmK",
        id_rol: 1,
        updatedAt: date,
        createdAt: date
    },
    {
        id_user: 7,
        name: "Alicia Gómez Esteve",
        email: "alicia55@gmail.com",
        dateBirth: "2000-11-26",
        phone: "223353556",
        password: "$2b$10$iQA2uDcLKmLnyXzdnW5yXe6tlbuFg58Y9aUPq2ZDnujJ4fTOCe0me",
        id_rol: 1,
        updatedAt: date,
        createdAt: date
    },
    {
        id_user: 8,
        name: "Jesús García Crescencio",
        email: "jesus55@gmail.com",
        dateBirth: "1995-05-24",
        phone: "648342986",
        password: "$2b$10$6bOl8qV.gJmSqqOHtN7fwuLQItdGsOVBJtbFo2CkZh.VIg8TvLkI.",
        id_rol: 1,
        updatedAt: date,
        createdAt: date
    },
    {
        id_user: 9,
        name: "Lola Martorell Pérez",
        email: "lola2@gmail.com",
        dateBirth: "1990-03-19",
        phone: "223001986",
        password: "$2b$10$4AxpsQ8n4UTzPSHVbXxGxef6XFE/rkx3PSqNd7D0SSLHQvEb.n4lO",
        id_rol: 1,
        updatedAt: date,
        createdAt: date
    },
    {
        id_user: 11,
        name: "Cristian Rodríguez García",
        email: "cristian23@gmail.com",
        dateBirth: "1999-12-02",
        phone: "223001886",
        password: "$2b$10$OXRJ5Q9HWkQrTmi5sd3ZgucN6n.6CagziTfVmStOLPpnFCNEUPRH.",
        id_rol: 1,
        updatedAt: date,
        createdAt: date
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

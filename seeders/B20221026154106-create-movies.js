'use strict';
let date = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('movies', [
      {
        id_movie: 1,
        genre: 'suspense',
        id_article: 1,
        createdAt: date,
        updatedAt: date
      },
      {
        id_movie: 2,
        genre: 'acción',
        id_article: 2,
        createdAt: date,
        updatedAt: date
      },
      {
        id_movie: 3,
        genre: 'terror',
        id_article: 3,
        createdAt: date,
        updatedAt: date
      },
      {
        id_movie: 4,
        genre: 'terror',
        id_article: 4,
        createdAt: date,
        updatedAt: date
      },
      {
        id_movie: 5,
        genre: 'terror',
        id_article: 5,
        createdAt: date,
        updatedAt: date
      },
      {
        id_movie: 6,
        genre: 'comedia',
        id_article: 6,
        createdAt: date,
        updatedAt: date
      },
      {
        id_movie: 7,
        genre: 'terror',
        id_article: 7,
        createdAt: date,
        updatedAt: date
      },
      {
        id_movie: 8,
        genre: 'suspense',
        id_article: 8,
        createdAt: date,
        updatedAt: date
      },
      {
        id_movie: 9,
        genre: 'acción',
        id_article: 9,
        createdAt: date,
        updatedAt: date
      },
      
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

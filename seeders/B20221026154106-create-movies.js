'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('movies', [
      {
        id_movie: 1,
        genre: 'suspense',
        id_article: 1
      },
      {
        id_movie: 2,
        genre: 'acción',
        id_article: 2
      },
      {
        id_movie: 3,
        genre: 'terror',
        id_article: 3
      },
      {
        id_movie: 4,
        genre: 'terror',
        id_article: 4
      },
      {
        id_movie: 5,
        genre: 'terror',
        id_article: 5
      },
      {
        id_movie: 6,
        genre: 'comedia',
        id_article: 6
      },
      {
        id_movie: 7,
        genre: 'terror',
        id_article: 7
      },
      {
        id_movie: 8,
        genre: 'suspense',
        id_article: 8
      },
      {
        id_movie: 9,
        genre: 'acción',
        id_article: 9
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

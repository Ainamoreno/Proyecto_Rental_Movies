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
      {
        id_movie: 10,
        genre: 'crimen',
        id_article: 17
      },
      {
        id_movie: 11,
        genre: 'animación',
        id_article: 18
      },
      {
        id_movie: 12,
        genre: 'aventura',
        id_article: 20
      },
      {
        id_movie: 13,
        genre: 'terror',
        id_article: 22
      },
      {
        id_movie: 14,
        genre: 'suspense',
        id_article: 23
      },
      {
        id_movie: 15,
        genre: 'bélica',
        id_article: 24
      },
      {
        id_movie: 16,
        genre: 'comedia',
        id_article: 25
      },
      {
        id_movie: 17,
        genre: 'fantasía',
        id_article: 26
      },
      {
        id_movie: 18,
        genre: 'misterio',
        id_article: 27
      },
      {
        id_movie: 19,
        genre: 'comedia',
        id_article: 28
      },
      {
        id_movie: 20,
        genre: 'romance',
        id_article: 29
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

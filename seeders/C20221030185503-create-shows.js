'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('shows', [
      {
        id_serie: 1,
        next_episode: '2022-11-13',
        permit: false,
        id_article: 10
      },
      {
        id_serie: 2,
        next_episode: '2022-11-14',
        permit: true,
        id_article: 11
      },
      {
        id_serie: 3,
        next_episode: '2022-11-12',
        permit: false,
        id_article: 12
      },
      {
        id_serie: 4,
        next_episode: '2022-11-16',
        permit: true,
        id_article: 13
      },
      {
        id_serie: 5,
        next_episode: '2022-11-3',
        permit: true,
        id_article: 14
      },
      {
        id_serie: 6,
        next_episode: '2020-09-14',
        permit: true,
        id_article: 15
      },
      {
        id_serie: 7,
        next_episode: '2022-11-14',
        permit: true,
        id_article: 16
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

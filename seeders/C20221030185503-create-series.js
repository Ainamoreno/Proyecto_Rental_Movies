'use strict';
let date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('series', [
      {
        id_serie: 1,
        next_episode: '2022-11-13',
        permit: false,
        id_article: 10,
        createdAt: date,
        updatedAt: date
      },
      {
        id_serie: 2,
        next_episode: '2022-11-14',
        permit: true,
        id_article: 11,
        createdAt: date,
        updatedAt: date
      },
      {
        id_serie: 3,
        next_episode: '2022-11-12',
        permit: false,
        id_article: 12,
        createdAt: date,
        updatedAt: date
      },
      {
        id_serie: 4,
        next_episode: '2022-11-16',
        permit: true,
        id_article: 13,
        createdAt: date,
        updatedAt: date
      },
      {
        id_serie: 5,
        next_episode: '2022-11-3',
        permit: true,
        id_article: 14,
        createdAt: date,
        updatedAt: date
      },
      {
        id_serie: 6,
        next_episode: '2020-09-14',
        permit: true,
        id_article: 15,
        createdAt: date,
        updatedAt: date
      },
      {
        id_serie: 7,
        next_episode: '2022-11-14',
        permit: true,
        id_article: 16,
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

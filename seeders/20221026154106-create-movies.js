'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('movies', [
      {
        movieId: 1,
        movieName: "No te preocupes querida",
        description:'Alice y Jack tienen la suerte de vivir en Victoria, la ciudad experimental de la compañía que alberga a los hombres que trabajan para el Proyecto Victoria, de alto secreto, y a sus familias. La vida es perfecta, con todas las necesidades de los residentes cubiertas por la empresa. Todo lo que piden a cambio es un compromiso incondicional con la causa de Victoria. Pero cuando empiezan a aparecer grietas en su idílica vida, exponiendo destellos de algo mucho más siniestro que se esconde bajo la atractiva fachada, Alice no puede evitar cuestionarse qué están haciendo en Victoria y por qué.¿Cuánto está dispuesta a perder Alice para sacar a la luz lo que realmente ocurre en el paraíso?',
        premiereMovie: "2022-09-23"
      },
      {
        movieId: 2,
        movieName: "La mujer rey",
        description:"Una epopeya histórica inspirada en los hechos reales que sucedieron en el Reino de Dahomey, uno de los estados más poderosos de África en los siglos XVIII y XIX. La historia sigue a Nanisca (Davis), general de la unidad militar exclusivamente femenina y a Nawi (Mbedu), una recluta ambiciosa. Juntas lucharon contra enemigos que violaron su honor, esclavizaron a su gente y amenazaron con destruir todo por lo que habían vivido.",
        premiereMovie: "2022-11-25"
      },
      {
        movieId: 3,
        movieName: "Chucky",
        description: "Después de que un muñeco vintage de Chucky aparece en una venta de patio suburbana, una ciudad estadounidense se ve sumida en el caos, luego de que una serie de crímenes horribles comienzan a exponer las hipocresías y los secretos de la ciudad. Mientras tanto, la llegada de enemigos y aliados del pasado de Chucky amenaza con exponer la verdad detrás de los acontecimientos así como los orígenes no contados del malvado muñeco.",
        premiereMovie: "2021-05-23"
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

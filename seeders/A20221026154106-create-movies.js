'use strict';
let date = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('movies', [
      {
        id_movie: 1,
        nameMovie: "No te preocupes querida",
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xnCgyKMSHKvxB1guE8wYcnmD6Tt.jpg',
        score: 6.9,
        description:'Alice y Jack tienen la suerte de vivir en Victoria, la ciudad experimental de la compañía que alberga a los hombres que trabajan para el Proyecto Victoria, de alto secreto, y a sus familias. La vida es perfecta, con todas las necesidades de los residentes cubiertas por la empresa. Todo lo que piden a cambio es un compromiso incondicional con la causa de Victoria. Pero cuando empiezan a aparecer grietas en su idílica vida, exponiendo destellos de algo mucho más siniestro que se esconde bajo la atractiva fachada, Alice no puede evitar cuestionarse qué están haciendo en Victoria y por qué.¿Cuánto está dispuesta a perder Alice para sacar a la luz lo que realmente ocurre en el paraíso?',
        data_premiere: "2022-09-23",
        genre: 'suspense', 
        createdAt: date,
        updatedAt: date
      },
      {
        id_movie: 2,
        nameMovie: "La mujer rey",
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/g7H3cg6aM11JOdlOLqaUp4BmMvM.jpg',
        score: 7.4,
        description:"Una epopeya histórica inspirada en los hechos reales que sucedieron en el Reino de Dahomey, uno de los estados más poderosos de África en los siglos XVIII y XIX. La historia sigue a Nanisca (Davis), general de la unidad militar exclusivamente femenina y a Nawi (Mbedu), una recluta ambiciosa. Juntas lucharon contra enemigos que violaron su honor, esclavizaron a su gente y amenazaron con destruir todo por lo que habían vivido.",
        data_premiere: "2022-11-25",
        genre: 'acción',
        createdAt: date,
        updatedAt: date
      },
      {
        id_movie: 3,
        nameMovie: "Chucky",
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kY0BogCM8SkNJ0MNiHB3VTM86Tz.jpg',
        score: 7.9,
        description: "Después de que un muñeco vintage de Chucky aparece en una venta de patio suburbana, una ciudad estadounidense se ve sumida en el caos, luego de que una serie de crímenes horribles comienzan a exponer las hipocresías y los secretos de la ciudad. Mientras tanto, la llegada de enemigos y aliados del pasado de Chucky amenaza con exponer la verdad detrás de los acontecimientos así como los orígenes no contados del malvado muñeco.",
        data_premiere: "2021-05-23",
        genre: 'terror',
        createdAt: date,
        updatedAt: date
      },
      {
        id_movie: 4,
        nameMovie: "Terrifier 2",
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yw8NQyvbeNXoZO6v4SEXrgQ27Ll.jpg',
        score: 7.5,
        description: "Después de ser resucitado por una entidad siniestra, Art the Clown regresa al condado de Miles, donde debe cazar y destruir a una adolescente y a su hermano menor en la noche de Halloween.",
        data_premiere: "2021-06-10",
        genre: 'terror',
        createdAt: date,
        updatedAt: date
      },
      {
        id_movie: 5,
        nameMovie: "Black Adam",
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3eQMzMd2qsZkAJbk4wekp3Crg54.jpg',
        score: 7.1,
        description: "Casi 5.000 años después de haber sido dotado de los poderes omnipotentes de los antiguos dioses -y encarcelado con la misma rapidez-, Black Adam es liberado de su tumba terrenal, listo para desatar su forma única de justicia en el mundo moderno.",
        data_premiere: "2021-10-21",
        genre: 'terror',
        createdAt: date,
        updatedAt: date
      },
      {
        id_movie: 6,
        nameMovie: "El retorno de las brujas 2",
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i2uxePzWHeliW3q8ck4W5zfv43w.jpg',
        score: 7.6,
        description: "Han pasado 29 años desde que alguien encendió la Vela de la Llama Negra y resucitó a las hermanas Sanderson del siglo XVII, y ahora buscan venganza. De tres estudiantes de secundaria depende impedir que las voraces brujas causen un nuevo tipo de estrago en Salem antes del amanecer el día de Halloween.",
        data_premiere: "2022-09-30",
        genre: 'comedia',
        createdAt: date,
        updatedAt: date
      },
      {
        id_movie: 7,
        nameMovie: "La huérfana: Primer asesinato",
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eed4qNf174pcT65it1PBbaTTL3x.jpg',
        score: 6.8,
        description: "Tras escapar de un centro psiquiátrico estonio, Leena Klammer viaja a América haciéndose pasar por Esther, la hija desaparecida de una familia adinerada. Pero cuando su máscara empieza a caer, se enfrenta a una madre que protegerá a su familia de la niña asesina a cualquier precio.",
        data_premiere: "2021-09-09",
        genre: 'terror',
        createdAt: date,
        updatedAt: date
      },
      {
        id_movie: 8,
        nameMovie: "Jeepers Creepers: Reborn",
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kY0BogCM8SkNJ0MNiHB3VTM86Tz.jpg',
        score: 7.9,
        description: "El Horror Hound festival celebra su primer evento en Luisiana, donde atrae a cientos de fanes del terror; entre ellos se encuentra Laine que, obligada a asistir por Chase, su novio, comienza a experimentar premoniciones inexplicables y visiones inquietantes relacionadas con el pasado de la ciudad y con El Creeper. A medida que avanza el festival y el entretenimiento empapado de sangre se convierte en un frenesí, Laine cree que algo sobrenatural ha sido convocado y que ella está en el centro de todo.",
        data_premiere: "2022-09-15",
        genre: 'suspense',
        createdAt: date,
        updatedAt: date
      },
      {
        id_movie: 9,
        nameMovie: "Fullmetal Alchemist: La alquimia final",
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mQQXEMsukZ2Okd98LCrL33q7tFH.jpg',
        score: 6.2,
        description: "El largo y tortuoso viaje de los hermanos Elric llega a su épico final, en el que deben enfrentar una amenaza de otro mundo que afecta a todo el país.",
        data_premiere: "2021-06-24",
        genre: 'acción',
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

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('articles', [
      {
        id_article: 1,
        name: "No te preocupes querida",
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xnCgyKMSHKvxB1guE8wYcnmD6Tt.jpg',
        score: 6.9,
        description:'Alice y Jack tienen la suerte de vivir en Victoria, la ciudad experimental de la compañía que alberga a los hombres que trabajan para el Proyecto Victoria, de alto secreto, y a sus familias. La vida es perfecta, con todas las necesidades de los residentes cubiertas por la empresa. Todo lo que piden a cambio es un compromiso incondicional con la causa de Victoria. Pero cuando empiezan a aparecer grietas en su idílica vida, exponiendo destellos de algo mucho más siniestro que se esconde bajo la atractiva fachada, Alice no puede evitar cuestionarse qué están haciendo en Victoria y por qué.¿Cuánto está dispuesta a perder Alice para sacar a la luz lo que realmente ocurre en el paraíso?',
        data_premiere: "2022-09-23",
        type: 'Película'
      },
      {
        id_article: 2,
        name: "La mujer rey",
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/g7H3cg6aM11JOdlOLqaUp4BmMvM.jpg',
        score: 7.4,
        description:"Una epopeya histórica inspirada en los hechos reales que sucedieron en el Reino de Dahomey, uno de los estados más poderosos de África en los siglos XVIII y XIX. La historia sigue a Nanisca (Davis), general de la unidad militar exclusivamente femenina y a Nawi (Mbedu), una recluta ambiciosa. Juntas lucharon contra enemigos que violaron su honor, esclavizaron a su gente y amenazaron con destruir todo por lo que habían vivido.",
        data_premiere: "2022-11-25",
        type: 'Película'
      },
      {
        id_article: 3,
        name: "Chucky",
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kY0BogCM8SkNJ0MNiHB3VTM86Tz.jpg',
        score: 7.9,
        description: "Después de que un muñeco vintage de Chucky aparece en una venta de patio suburbana, una ciudad estadounidense se ve sumida en el caos, luego de que una serie de crímenes horribles comienzan a exponer las hipocresías y los secretos de la ciudad. Mientras tanto, la llegada de enemigos y aliados del pasado de Chucky amenaza con exponer la verdad detrás de los acontecimientos así como los orígenes no contados del malvado muñeco.",
        data_premiere: "2021-05-23",
        type: 'Película'
      },
      {
        id_article: 4,
        name: "Terrifier 2",
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yw8NQyvbeNXoZO6v4SEXrgQ27Ll.jpg',
        score: 7.5,
        description: "Después de ser resucitado por una entidad siniestra, Art the Clown regresa al condado de Miles, donde debe cazar y destruir a una adolescente y a su hermano menor en la noche de Halloween.",
        data_premiere: "2021-06-10",
        type: 'Película'
      },
      {
        id_article: 5,
        name: "Black Adam",
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3eQMzMd2qsZkAJbk4wekp3Crg54.jpg',
        score: 7.1,
        description: "Casi 5.000 años después de haber sido dotado de los poderes omnipotentes de los antiguos dioses -y encarcelado con la misma rapidez-, Black Adam es liberado de su tumba terrenal, listo para desatar su forma única de justicia en el mundo moderno.",
        data_premiere: "2021-10-21",
        type: 'Película'
      },
      {
        id_article: 6,
        name: "El retorno de las brujas 2",
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i2uxePzWHeliW3q8ck4W5zfv43w.jpg',
        score: 7.6,
        description: "Han pasado 29 años desde que alguien encendió la Vela de la Llama Negra y resucitó a las hermanas Sanderson del siglo XVII, y ahora buscan venganza. De tres estudiantes de secundaria depende impedir que las voraces brujas causen un nuevo tipo de estrago en Salem antes del amanecer el día de Halloween.",
        data_premiere: "2022-09-30",
        type: 'Película'
      },
      {
        id_article: 7,
        name: "La huérfana: Primer asesinato",
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eed4qNf174pcT65it1PBbaTTL3x.jpg',
        score: 6.8,
        description: "Tras escapar de un centro psiquiátrico estonio, Leena Klammer viaja a América haciéndose pasar por Esther, la hija desaparecida de una familia adinerada. Pero cuando su máscara empieza a caer, se enfrenta a una madre que protegerá a su familia de la niña asesina a cualquier precio.",
        data_premiere: "2021-09-09",
        type: 'Película'
      },
      {
        id_article: 8,
        name: "Jeepers Creepers: Reborn",
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kY0BogCM8SkNJ0MNiHB3VTM86Tz.jpg',
        score: 7.9,
        description: "El Horror Hound festival celebra su primer evento en Luisiana, donde atrae a cientos de fanes del terror; entre ellos se encuentra Laine que, obligada a asistir por Chase, su novio, comienza a experimentar premoniciones inexplicables y visiones inquietantes relacionadas con el pasado de la ciudad y con El Creeper. A medida que avanza el festival y el entretenimiento empapado de sangre se convierte en un frenesí, Laine cree que algo sobrenatural ha sido convocado y que ella está en el centro de todo.",
        data_premiere: "2022-09-15",
        type: 'Película'
      },
      {
        id_article: 9,
        name: "Fullmetal Alchemist: La alquimia final",
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mQQXEMsukZ2Okd98LCrL33q7tFH.jpg',
        score: 6.2,
        description: "El largo y tortuoso viaje de los hermanos Elric llega a su épico final, en el que deben enfrentar una amenaza de otro mundo que afecta a todo el país.",
        data_premiere: "2021-06-24",
        type: 'Película'
      },
      {
        id_article: 10,
        name: 'The Walking Dead',
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg',
        score: 8.1,
        description: '"The Walking Dead" está ambientada en un futuro apocalíptico con la Tierra devastada por el efecto de un cataclismo, que ha provocado la mutación en zombies de la mayor parte de los habitantes del planeta. La serie, explora las dificultades de los protagonistas para sobrevivir en un mundo poblado por el horror, así como las relaciones personales que se establecen entre ellos, en ocasiones también una amenaza para su supervivencia.',
        data_premiere: '2021-04-12',
        type: 'Serie'
      },
      {
        id_article: 11,
        name: 'Breaking Bad',
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
        score: 8.8,
        description: 'Tras cumplir 50 años, Walter White (Bryan Cranston), un profesor de química de un instituto de Albuquerque, Nuevo México, se entera de que tiene un cáncer de pulmón incurable. Casado con Skyler (Anna Gunn) y con un hijo discapacitado (RJ Mitte), la brutal noticia lo impulsa a dar un drástico cambio a su vida: decide, con la ayuda de un antiguo alumno (Aaron Paul), fabricar anfetaminas y ponerlas a la venta. Lo que pretende es liberar a su familia de problemas económicos cuando se produzca el fatal desenlace.',
        data_premiere: '2008-06-12',
        type: 'Serie'
      },
      {
        id_article: 12,
        name: 'Las Kardashian',
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ftbs56alkPVhyqIn68jaUrRyNTU.jpg',
        score: 8.7,
        description: 'La familia a la que tanto conoces y adoras vuelve con una nueva serie dando acceso pleno a toda su vida. Kris, Kourtney, Kim, Khloé, Kendall y Kylie se exponen ante las cámaras para revelar los secretos que hay tras los titulares.',
        data_premiere: '2021-04-12',
        type: 'Serie'
      },
      {
        id_article: 13,
        name: 'One Piece',
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/e3NBGiAifW9Xt8xD5tpARskjccO.jpg',
        score: 8.7,
        description: 'Riqueza, fama, poder... un hombre había obtenido todo en este mundo, era el Rey de los Piratas Gold Roger. Antes de morir sus últimas palabras inspiraron al mundo a aventurarse al mar: "¿Mi tesoro? Si lo queréis es vuestro... lo he escondido todo en ese lugar". Y así dio comienzo lo que se conoce como la Gran Era de la Piratería, lanzando a cientos de piratas al mar para encontrar el gran tesoro One Piece. Esta serie relata las aventuras y desventuras de uno de esos piratas, Monkey D. Luffy, quien accidentalmente de pequeño, comió una Fruta del Diablo (Akuma no Mi en japonés), en particular una Gomu Gomu no Mi que hizo que su cuerpo ganara las propiedades físicas de la goma, convirtiéndose en el hombre de goma. Luffy, después de dicho suceso, decide que se convertirá en el próximo Rey de los Piratas y para ello, deberá encontrar el "One Piece".',
        data_premiere: '2021-04-12',
        type: 'Serie'
      },
      {
        id_article: 14,
        name: 'GOBLIN: El solitario ser inmortal',
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c2gon6zbqzL73DOl8mPQMMUJXvE.jpg',
        score: 8.7,
        description: 'Un ser inmortal desea terminar su existencia buscando en todo el mundo su novia que es la destinada a sacar la espada que le atraviesa el pecho y solo ella es capaz de verla, pero luego de conocerse se enamoran y es cuando todo cambia para el ser inmortal ya que debido al amor que siente encuentra una nueva razón para mantenerse vivo pero con esto pone en peligro a su amada que además es capaz de ver fantasmas, paralelamente existe un ángel de la muerte que se enamora perdidamente de la que resulta ser la reencarnación de la hermana del ser inmortal. Durante el desarrollo de esta serie se pueden disfrutar de momentos que evocan emisiones inimaginable y definitivamente no tiene ni un solo instante desperdiciado.',
        data_premiere: '2016-08-24',
        type: 'Serie'
      },
      {
        id_article: 15,
        name: 'Juego de tronos',
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/z9gCSwIObDOD2BEtmUwfasar3xs.jpg',
        score: 8.4,
        description: 'En una tierra donde los veranos duran décadas y los inviernos pueden durar toda una vida, los problemas acechan. Desde las maquinaciones del sur a las salvajes tierras del este, pasando por el helado norte y el milenario muro que protege el reino de las fuerzas tenebrosas, dos poderosas familias mantienen un enfrentamiento letal por gobernar los Siete Reinos de Poniente. Mientras la traición, la lujuria y las fuerzas sobrenaturales sacuden los pilares de los reinos, la sangrienta batalla por el trono de Hierro tendrá consecuencias imprevistas y trascendentales. El invierno se acerca. Que empiece "Juego de tronos".',
        data_premiere: '2011-12-13',
        type: 'Serie'
      },
      {
        id_article: 16,
        name: 'La casa del dragón',
        photo: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c2gon6zbqzL73DOl8mPQMMUJXvE.jpg',
        score: 8.5,
        description: 'Basada en el libro "Fuego y Sangre" de George R.R. Martin. La serie se centra en la casa Targaryen, trescientos años antes de los eventos vistos en "Juego de Tronos".',
        data_premiere: '2022-08-24',
        type: 'Serie'
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

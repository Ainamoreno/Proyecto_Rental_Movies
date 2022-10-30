const models = require('../models/index');

const moviesController = {};

moviesController.getMovies_1 = async (req, res) => {
    let resp = await models.movies.findAll({
        order: [
            ["score", 'DESC']
        ]
    })
    res.send(resp);
};

moviesController.getMovies_2 = async (req, res) => {
    let id = req.params.id
    let resp = await models.movies.findAll(
        {
            where: { id_movie: id },
        },
    )
    res.send(resp);
};

moviesController.getMovies_3 = async (req, res) => {
    let name = req.params.name;
    let resp = await models.movies.findAll(
        {
            where: { nameMovie: name }
        }
    )
    res.send(resp);
};

moviesController.getMovies_4 = async (req, res) => {
    let genreM = req.params.genreM;
    let resp = await models.movies.findAll(
        {
            where: { genre: genreM }
        }
    )
    res.send(resp);
};

module.exports = moviesController
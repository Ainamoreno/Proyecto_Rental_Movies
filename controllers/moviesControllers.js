const models = require('../models/index');

const moviesController = {};

moviesController.getMovies_1 = async (req, res) => {
    try {
        let resp = await models.articles.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'articleIdArticle']
            },
            where: { type: 'Película' },
            order: [
                ["score", 'DESC']
            ],
        })
        res.send(resp);
    } catch (err) {
        res.send(err)
    }

};

moviesController.getMovies_2 = async (req, res) => {
    try {
        let id = req.params.id
        let resp = await models.movies.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'articleIdArticle']
            },
            where: { id_movie: id },
            include: {
                model: models.articles,
                attributes: ['name']
            }

        })
        res.send(resp);
    } catch (err) {
        res.send(err)
    }

};

moviesController.getMovies_3 = async (req, res) => {
    try {
        let name = req.params.name;
        let resp = await models.articles.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'articleIdArticle']
            },
            where: {
                name: name,
                type: 'Película'
            }

        })
        res.send(resp);
    } catch (err) {
        res.send(err)
    }

};

moviesController.getMovies_4 = async (req, res) => {
    try {
        let genreM = req.params.genreM;
        let resp = await models.movies.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'articleIdArticle']
            },
            where: { genre: genreM },
            include: {
                model: models.articles,
                attributes: ['name', 'photo', 'score', 'description', 'data_premiere']
            }

        })
        res.send(resp);
    } catch (err) {
        res.send(err)
    }

};


module.exports = moviesController
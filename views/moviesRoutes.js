const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesControllers');


// GET
router.get('/movieTopRated', moviesController.getMovies_1 );
router.get('/allArticles', moviesController.allArticles );
router.get('/movieById/:id', moviesController.getMovies_2);
router.get('/movieByName/:name', moviesController.getMovies_3);
router.get('/movieByGenre/:genreM', moviesController.getMovies_4);


module.exports = router;
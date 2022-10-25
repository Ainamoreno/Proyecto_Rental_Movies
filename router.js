const express = require('express');
const router = express.Router();

const MovieRoutes = require('./views/moviesRoutes');

//midleware
router.use('/movies', MovieRoutes)


module.exports = router
const express = require('express');
const router = express.Router();

const UserRoutes = require('./views/usersRoutes');
const moviesRoutes = require('./views/moviesRoutes');
const seriesRoutes = require('./views/seriesRoutes');

//middleware
router.use('/users', UserRoutes);
router.use('/movies', moviesRoutes);
router.use('/series', seriesRoutes);


module.exports = router;
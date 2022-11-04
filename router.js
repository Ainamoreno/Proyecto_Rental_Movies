const express = require('express');
const router = express.Router();

const UserRoutes = require('./views/usersRoutes');
const moviesRoutes = require('./views/moviesRoutes');
const showsRoutes = require('./views/showsRoutes');
const rentalsRoutes = require('./views/rentalRoutes');

//middleware
router.use('/users', UserRoutes);
router.use('/movies', moviesRoutes);
router.use('/shows', showsRoutes);
router.use('/rentals', rentalsRoutes )


module.exports = router;
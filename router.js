const express = require('express');
const router = express.Router();

const UserRoutes = require('./views/usersRoutes');
const moviesRoutes = require('./views/moviesRoutes')

//midleware
router.use('/users', UserRoutes)
router.use('/movies', moviesRoutes)


module.exports = router
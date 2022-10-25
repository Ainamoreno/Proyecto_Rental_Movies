const express = require('express');
const router = express.Router();

const UserRoutes = require('./views/usersRoutes');

//midleware
router.use('/users', UserRoutes)


module.exports = router
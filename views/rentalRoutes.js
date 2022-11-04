const express = require('express');
const router = express.Router();
const rentalsControllers = require('../controllers/rentalsControllers');

router.post('/createRental/:id', rentalsControllers.postrental_1 );

module.exports = router
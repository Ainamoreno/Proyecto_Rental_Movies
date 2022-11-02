const express = require('express');
const router = express.Router();
const rentalsControllers = require('../controllers/rentalsControllers');

router.post('/createRental', rentalsControllers.postrental_1 );
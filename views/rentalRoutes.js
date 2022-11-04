const express = require('express');
const router = express.Router();
const rentalsControllers = require('../controllers/rentalsControllers');

router.post('/createRental', rentalsControllers.createRental );
router.post('/createRental/:idRental', rentalsControllers.rentalArticle );
router.get('/rentalsUser/:idUser', rentalsControllers.rentalsUser );

module.exports = router
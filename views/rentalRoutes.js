const express = require('express');
const router = express.Router();
const rentalsControllers = require('../controllers/rentalsControllers');
const { authBearerMiddleware, isValidRoleAdmin, validUser } = require('../middleware/auth.middleware');

router.post('/createRental',authBearerMiddleware, validUser, rentalsControllers.createRental );
router.get('/rentalsUser/:idUser', authBearerMiddleware, validUser, rentalsControllers.rentalsUser );
router.get('/modifRental/:idUser/:idRental', authBearerMiddleware, validUser, rentalsControllers.modifRental );
router.post('/allRentals',authBearerMiddleware, isValidRoleAdmin, validUser, rentalsControllers.allRentals );

module.exports = router
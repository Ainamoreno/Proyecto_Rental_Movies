const express = require('express');
const router = express.Router();
const rentalsControllers = require('../controllers/rentalsControllers');
const { authBearerMiddleware, isValidRoleAdmin } = require('../middleware/auth.middleware');

router.post('/createRental', rentalsControllers.createRental );
router.get('/rentalsUser/:idUser', rentalsControllers.rentalsUser );
router.get('/modifRental/:idUser/:idRental', rentalsControllers.modifRental );
router.get('/allRentals',authBearerMiddleware, isValidRoleAdmin, rentalsControllers.allRentals );

module.exports = router
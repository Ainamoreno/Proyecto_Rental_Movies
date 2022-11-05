const express = require('express');
const router = express.Router();
const showsController = require('../controllers/showsControllers');

// GET
router.get('/showTopRated', showsController.getshows_1 );
router.get('/showById/:id', showsController.getshows_2);
router.get('/showByName/:name', showsController.getshows_3);
router.get('/showNextEp', showsController.getshows_4);
router.get('/showPermit', showsController.getshows_5);


module.exports = router;
const express = require('express');
const router = express.Router();
const showsController = require('../controllers/showsControllers');

// GET
router.get('/serieTopRated', showsController.getshows_1 );
router.get('/serieById/:id', showsController.getshows_2);
router.get('/serieByName/:name', showsController.getshows_3);
router.get('/serieNextEp', showsController.getshows_4);
router.get('/seriePermit', showsController.getshows_5);


module.exports = router;
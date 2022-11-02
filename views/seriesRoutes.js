const express = require('express');
const router = express.Router();
const seriesController = require('../controllers/seriesControllers');

// GET
router.get('/serieTopRated', seriesController.getseries_1 );
router.get('/serieById/:id', seriesController.getseries_2);
router.get('/serieByName/:name', seriesController.getseries_3);
router.get('/serieNextEp', seriesController.getseries_4);
router.get('/seriePermit', seriesController.getseries_5);


module.exports = router;
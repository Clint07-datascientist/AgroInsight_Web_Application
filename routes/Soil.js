const express = require('express');
const router = express.Router();
const soilController = require('../controllers/SoilController');

router.get('/', soilController.getSoilData);
router.post('/', soilController.addSoilData);

module.exports = router;

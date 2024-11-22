const express = require('express');
const router = express.Router();
const SoilController = require('../controllers/SoilController'); // Ensure this path is correct

// Define your routes here
router.get('/', SoilController.getAllSoilData);
router.post('/', SoilController.createSoilData);

module.exports = router;
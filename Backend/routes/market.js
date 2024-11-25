const express = require('express');
const router = express.Router();
const MarketController = require('../controllers/MarketController'); // Ensure this path is correct

// Define your routes here
router.get('/', MarketController.getAllMarketData);
router.post('/', MarketController.createMarketData);

module.exports = router;
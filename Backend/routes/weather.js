const express = require('express');
const router = express.Router();
const WeatherController = require('../controllers/WeatherController'); // Ensure this path is correct

// Define your routes here
router.get('/', WeatherController.getAllWeatherData);
router.post('/', WeatherController.createWeatherData);

module.exports = router;
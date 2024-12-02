const express = require('express');
const router = express.Router();
const CropController = require('../controllers/CropController'); // Ensure this path is correct

// Define your routes here
router.get('/', CropController.getAllCropData);
router.post('/', CropController.createCropData);

module.exports = router;
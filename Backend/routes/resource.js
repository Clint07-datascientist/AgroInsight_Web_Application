const express = require('express');
const router = express.Router();
const ResourceController = require('../controllers/ResourceController'); // Ensure this path is correct

// Define your routes here
router.get('/', ResourceController.getAllResourceData);
router.post('/', ResourceController.createResourceData);

module.exports = router;
const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  temperature: {
    type: Number,
    required: true,
  },
  humidity: {
    type: Number,
    required: true,
  },
  windSpeed: {
    type: Number,
    required: true,
  },
  precipitation: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Weather', weatherSchema);
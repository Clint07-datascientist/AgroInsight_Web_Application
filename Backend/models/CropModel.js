const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  healthStatus: {
    type: String,
    required: true,
  },
  growthStage: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Crop', cropSchema);
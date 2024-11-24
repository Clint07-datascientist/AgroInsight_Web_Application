const mongoose = require('mongoose');

const soilSchema = new mongoose.Schema({
  moisture: {
    type: Number,
    required: true,
  },
  pH: {
    type: Number,
    required: true,
  },
  nutrients: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Soil', soilSchema);
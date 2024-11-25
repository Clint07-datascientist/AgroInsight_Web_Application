const mongoose = require('mongoose');

const marketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  demand: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Market', marketSchema);
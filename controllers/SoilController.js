// controllers/soilController.js
const Soil = require('../models/SoilModel');

exports.getSoilData = async (req, res) => {
  try {
    const soilData = await Soil.find();
    res.json(soilData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addSoilData = async (req, res) => {
  const soil = new Soil({
    moisture: req.body.moisture,
    pH: req.body.pH,
    nutrients: req.body.nutrients,
  });

  try {
    const newSoilData = await soil.save();
    res.status(201).json(newSoilData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

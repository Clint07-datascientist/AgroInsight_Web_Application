const Soil = require('../models/SoilModel'); // Ensure this path is correct

exports.getAllSoilData = async (req, res) => {
  try {
    const soilData = await Soil.find();
    res.json(soilData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createSoilData = async (req, res) => {
  const soil = new Soil({
    // Define your soil data fields here
  });

  try {
    const newSoil = await soil.save();
    res.status(201).json(newSoil);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
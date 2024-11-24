const Crop = require('../models/CropModel'); // Ensure this path is correct

exports.getAllCropData = async (req, res) => {
  try {
    const cropData = await Crop.find();
    res.json(cropData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createCropData = async (req, res) => {
  const crop = new Crop({
    // Define your crop data fields here
  });

  try {
    const newCrop = await crop.save();
    res.status(201).json(newCrop);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
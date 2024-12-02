const Resource = require('../models/ResourceModel'); // Ensure this path is correct

exports.getAllResourceData = async (req, res) => {
  try {
    const resourceData = await Resource.find();
    res.json(resourceData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createResourceData = async (req, res) => {
  const resource = new Resource({
    // Define your resource data fields here
  });

  try {
    const newResource = await resource.save();
    res.status(201).json(newResource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
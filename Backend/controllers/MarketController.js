const Market = require('../models/MarketModel'); // Ensure this path is correct

exports.getAllMarketData = async (req, res) => {
  try {
    const marketData = await Market.find();
    res.json(marketData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createMarketData = async (req, res) => {
  const market = new Market({
    // Define your market data fields here
    name: req.body.name,
    price: req.body.price,
    demand: req.body.demand,
  });

  try {
    const newMarket = await market.save();
    res.status(201).json(newMarket);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
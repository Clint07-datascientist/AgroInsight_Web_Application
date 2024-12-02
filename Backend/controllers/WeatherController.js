const Weather = require('../models/WeatherModel'); // Ensure this path is correct

exports.getAllWeatherData = async (req, res) => {
  try {
    const weatherData = await Weather.find();
    res.json(weatherData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createWeatherData = async (req, res) => {
  const weather = new Weather({
    // Define your weather data fields here
  });

  try {
    const newWeather = await weather.save();
    res.status(201).json(newWeather);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const soilRoutes = require('./routes/soil');
const weatherRoutes = require('./routes/weather');
const cropRoutes = require('./routes/crop');
const resourceRoutes = require('./routes/resource');
const marketRoutes = require('./routes/market');

app.use('/soil', soilRoutes);
app.use('/weather', weatherRoutes);
app.use('/crop', cropRoutes);
app.use('/resource', resourceRoutes);
app.use('/market', marketRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

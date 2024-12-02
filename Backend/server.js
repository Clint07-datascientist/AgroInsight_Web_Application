const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connectDB = require('./config/db'); // Ensure this path is correct

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to the database
connectDB();

const soilRoutes = require('./routes/soil'); // Ensure these paths are correct
const weatherRoutes = require('./routes/weather');
const cropRoutes = require('./routes/crop');
const resourceRoutes = require('./routes/resource');
const marketRoutes = require('./routes/market');

app.use('/soil', soilRoutes);
app.use('/weather', weatherRoutes);
app.use('/crop', cropRoutes);
app.use('/resource', resourceRoutes);
app.use('/market', marketRoutes);

const SECRET_KEY = 'your_secret_key';

const users = [
  { username: 'farmer', password: bcrypt.hashSync('farmerpassword', 10), role: 'farmer' },
  { username: 'ADMN001', password: bcrypt.hashSync('adminpassword', 10), role: 'admin' }
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ username: user.username, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

const PORT = process.env.PORT || 5000; // Change this to a different port if needed
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
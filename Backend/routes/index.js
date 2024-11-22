const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the AgroInsight API');
});

module.exports = router;

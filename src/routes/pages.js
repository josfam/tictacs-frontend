// For serving normal pages

const express = require('express');
const router = express.Router();
const path = require('path');

// Serve the React app's index.html for all routes
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
});

module.exports = router;

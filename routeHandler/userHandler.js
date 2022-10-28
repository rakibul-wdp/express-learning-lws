const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const userSchema = require('../schemas/userSchema');
const User = new mongoose.model('User', userSchema);

// SIGNUP
router.get('/', (req, res) => {
  
});

module.exports = router;
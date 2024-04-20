const jwt = require('jsonwebtoken');
// const Token = require('../models/Token');

// Generate JWT token
const generateToken = (userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '20s' });

    return token;

};

module.exports = generateToken; 
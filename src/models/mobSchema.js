const mongoose = require('mongoose');

const mobSchema = new mongoose.Schema({
    atkPower: Number,
    hitPoints: Number,
    name: String
    });
    
module.exports = mobSchema;
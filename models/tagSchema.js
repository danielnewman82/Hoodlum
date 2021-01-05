const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    text: String,
    author: String,
    time: Date
    });
    
module.exports = tagSchema;
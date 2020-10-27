const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    text: String,
    author: String,
    time: String
    });
    
module.exports = mongoose.model('Tag', tagSchema);
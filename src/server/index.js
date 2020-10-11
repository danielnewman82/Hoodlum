const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../../public/')));

// An api endpoint that returns a short list of items
app.get('/api/getTags', (req, res) => {
    mongoose.connect('mongodb+srv://Tagger:X0VVQtA1U1UTCZa7@cluster0.cnht3.mongodb.net/HoodlumData', {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        // we're connected!
        const tagSchema = new mongoose.Schema({
            text: String,
            author: String,
            date: String
            });
        const Tag = mongoose.model('tags', tagSchema);
        Tag.find(function (err, tags) {
            if (err) return console.error(err);
            console.log(tags);
            return tags;
        });
    });
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'../../../public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
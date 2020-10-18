const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../../public/')));
app.use(bodyParser.json());

const tagSchema = new mongoose.Schema({
    text: String,
    author: String,
    time: String
    });
    
const Tag = mongoose.model('Tag', tagSchema);

app.get('/api/getTags', (req, res) => {
    mongoose.connect('mongodb+srv://Tagger:X0VVQtA1U1UTCZa7@cluster0.cnht3.mongodb.net/HoodlumData', {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    Tag.find(function (err, tags) {
        if (err) return console.error(err);
        res.send(tags);
    });
    console.log('Sent array of tag objects')
});

app.post('/api/postTag', (req, res) => {
    mongoose.connect('mongodb+srv://Tagger:X0VVQtA1U1UTCZa7@cluster0.cnht3.mongodb.net/HoodlumData', {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    Tag.create({ text: req.body.text, author: req.body.author, time: req.body.time });
    res.send(console.log('Tag posted to DB'))
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'../../../public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
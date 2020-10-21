const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const dotenv = require('dotenv').config();
const taggerURI = process.env.MONGODB_TAGGER_URI;
const userURI = process.env.MONGODB_USER_URI;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/public/')));
app.use(bodyParser.json());

const tagSchema = new mongoose.Schema({
    text: String,
    author: String,
    time: String
    });
    
const Tag = mongoose.model('Tag', tagSchema);

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    sex: String,
    level: Number,
    xp: Number,
    curHitPoints: Number,
    maxHitPoints: Number,
    cashInHand: Number,
    cashInStash: Number,
    cashInBank: Number,
    weapon: Object,
    armor: Object,
    outfit: String,
    reputation: String,
    repScore: Number, 
    location: String,
    pveFights: Number,
    pvpFights: Number,
    lockedOut: Boolean,
    tagsToday: Number
})

const User = mongoose.model('User', userSchema);

app.get('/api/findUserByEmail/:email', (req, res) => {
    mongoose.connect(userURI, {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    User.findOne({ email: req.params.email }, function (err, user) {
        if (err) return console.error(err);
        res.send(user);
    }).exec();
    console.log('Found user by email');
})

app.get('/api/getTags', (req, res) => {
    mongoose.connect(taggerURI, {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    Tag.find(function (err, tags) {
        if (err) return console.error(err);
        res.send(tags);
    });
    console.log('Sent array of tag objects')
});

app.post('/api/postTag', (req, res) => {
    mongoose.connect(taggerURI, {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    Tag.create({ text: req.body.text, author: req.body.author, time: req.body.time });
    res.send(console.log('Tag posted to DB'))
});

// Handles any requests that don't match the ones above
/* app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
}); */

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
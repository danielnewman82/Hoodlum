const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const dotenv = require('dotenv').config();
const taggerURI = process.env.MONGODB_TAGGER_URI;
const userURI = process.env.MONGODB_USER_URI;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

const tagSchema = new mongoose.Schema({
    text: String,
    author: String,
    time: String
    });
    
const Tag = mongoose.model('Tag', tagSchema);

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    creationDate: {type: Date, default: new Date().toDateString(), required: true},
    lastLogin: {type: Date, required: true},
    name: {type: String, required: true},
    sex: {type: String, required: true},
    level: {type: Number, required: true},
    xp: {type: Number, required: true},
    curHitPoints: {type: Number, required: true},
    maxHitPoints: {type: Number, required: true},
    cashInHand: {type: Number, required: true},
    cashInStash: {type: Number, required: true},
    cashInBank: {type: Number, required: true},
    weapon: Object,
    armor: Object,
    outfit: {type: String, required: true},
    reputation: {type: String, required: true},
    repScore: {type: Number, required: true}, 
    location: String,
    pveFights: {type: Number, required: true},
    pvpFights: {type: Number, required: true},
    lockedOut: Boolean,
    tagsToday: {type: Number, required: true},
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

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
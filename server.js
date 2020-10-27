const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Tag = require('./models/tagSchema');
const User = require('./models/userSchema');

const app = express();

const dotenv = require('dotenv').config();
const taggerURI = process.env.MONGODB_TAGGER_URI;
const userURI = process.env.MONGODB_USER_URI;

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());

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

/* app.get('/api/getEmails', (req, res) => {
    mongoose.connect(taggerURI, {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    User.find(function (err, tags) {
        if (err) return console.error(err);
        res.send(tags);
    });
    console.log('Sent array of tag objects')
}); */

app.get('/api/getEmails', (req, res) => {
    mongoose.connect(userURI, {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    User.find({}).select({ _id: 0, email: 1}).exec(function (err, emails) {
        if (err) return console.error(err);
        res.send(emails);
    });
    console.log('Sent array of user emails')
});

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

app.use(express.static(path.join(__dirname,'/build')));

// Handles any requests that don't match the ones above
app.get('/', function (req, res, next) {
    res.sendFile(path.resolve('build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Express server is running on ' + port));
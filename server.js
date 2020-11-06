const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const Tag = require('./models/tagSchema');
const User = require('./models/userSchema');
const cookieParser = require('cookie-parser');

const app = express();

const dotenv = require('dotenv').config();
const taggerURI = process.env.MONGODB_TAGGER_URI;
const userURI = process.env.MONGODB_USER_URI;
const JWTSecret = process.env.JWT_SECRET;

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
app.use(bodyParser.json());
app.use(cookieParser());

// route protection middleware
const withAuth = function(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, JWTSecret, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
}

app.get('/checkToken', withAuth, function(req, res) {
    res.sendStatus(200);
  }
)

app.post('/api/getCharStats', function(req, res) {
  mongoose.connect(userURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  const { email } = req.body;
  User.findOne({email}, {_id: 0, password: 0}, function(err, user) {
    if (err) return console.error(err);
    res.json(user);
  })
})

// POST route to register a user
app.post('/api/register', function(req, res) {
    mongoose.connect(userURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    User.create({ email : req.body.email, password : req.body.password, name: req.body.name, sex: req.body.sex, 
        level: 1, 
        xp: 0, 
        curHitPoints: 20, 
        maxHitPoints: 20, 
        cashInHand: 0, 
        cashInStash: 0, 
        cashInBank: 0, 
        weapon: { name: " fists", sellPrice : 0, atkPower : 4}, 
        armor: { name: " none", sellPrice : 0, defPower : 2}, 
        outfit: "Shabby Urchin Gear", 
        reputation: "Anonymous Nobody",
        repScore: 0, 
        location: "", 
        pveFights: 15,
        pvpFights: 3,
        lockedOut: false,
        tagsToday: 0
        }, 
        function(err) {
      if (err) {
        res.status(500)
          .send("Error registering new user please try again.");
      } else {
        res.status(200).send("Welcome to the jungle, baby!");
      }
    });
  });

// POST route to authenticate email and password
app.post('/api/authenticate', function(req, res) {
    mongoose.connect(userURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    const { email, password } = req.body;
    User.findOne({ email }, function(err, user) {
      if (err) {
        console.error(err);
        res.status(500)
          .json({
          error: 'Internal error please try again'
        });
      } else if (!user) {
        res.status(401)
          .json({
            error: 'Incorrect email'
          });
        console.log('Incorrect email')
      } else {
        user.isCorrectPassword(password, function(err, same) {
          if (err) {
            res.status(500)
              .json({
                error: 'Internal error please try again'
            });
          } else if (!same) {
            res.status(401)
              .json({
                error: 'Incorrect password'
            });
            console.log('Incorrect password')
          } else {
            // Issue token
            const payload = { email };
            const token = jwt.sign(payload, JWTSecret, {
              expiresIn: '1h'
            });
            res.cookie('token', token, { httpOnly: true })
              .sendStatus(200);
            console.log('Authentication successful!')
          }
        });
      }
    });
  });
  
app.get('/api/getTags', (req, res) => {
    mongoose.connect(taggerURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    Tag.find(function (err, tags) {
        if (err) return console.error(err);
        res.send(tags);
    });
    console.log('Sent array of tag objects')
});

app.post('/api/postTag', (req, res) => {
    mongoose.connect(taggerURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    Tag.create({ text: req.body.text, author: req.body.author, time: req.body.time });
    res.send(console.log('Tag posted to DB'))
});

app.use(express.static(path.join(__dirname,'/public')));

// Handles any requests that don't match the ones above
app.get('/', function (req, res, next) {
    res.sendFile(path.resolve('public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Express server is running on ' + port));
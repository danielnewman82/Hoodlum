const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const userSchema = require('./src/models/userSchema');
const cookieParser = require('cookie-parser');
const tagSchema = require('./src/models/tagSchema');
const mobSchema = require('./src/models/mobSchema');

const app = express();

require('dotenv').config();

const JWTSecret = process.env.JWT_SECRET;

const tagConn = mongoose.createConnection(process.env.MONGODB_TAGGER_URI);
const TagModel = tagConn.model('Tag', tagSchema);
const userConn = mongoose.createConnection(process.env.MONGODB_USER_URI);
const UserModel = userConn.model('User', userSchema);
const mobConn = mongoose.createConnection(process.env.MONGODB_MOB_URI);
const MobModel = mobConn.model('Mob', mobSchema);

// Bodyparser middleware
app.use(express.urlencoded({ extended: false }) );
app.use(express.json());
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

app.post('/api/getCharStats', withAuth, function(req, res) {
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  const { email } = req.body;
  UserModel.findOne({email}, {_id: 0, password: 0, __v: 0}, function(err, user) {
    if (err) return console.error(err);
    res.json(user);
  })
})

app.put('/api/updateCharStats', withAuth, function(req, res) {
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  const { email } = req.body
  UserModel.updateOne({email}, req.body, { new: true, upsert: true }, function(err, user) {
    if (err) return console.error(err);
    res.json(user)
  });
  }) 

// combatRound is supposed to receive the player's auth token and the attack power of the mob, fetch their attack and 
// defense power, calculate the outcome of the round, and return the results. I have yet to figure out how to do that. 
// But perhaps mob data should also live in the database, where it can't be tampered with... 

app.put('/api/combatRound', withAuth, async function(req, res) {
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  // parse the player's email from the request
  const {playerId} = req.body.email
  // pull the player's data from the DB
  const player = await UserModel.findOne(playerId).lean().exec();
  // check if player is still alive
  if (player.curHitPoints <= 0) { res.json(player.curHitPoints) }
  // check if mob is still alive
  if (req.body.mobHP <= 0) { res.json(req.body.mobHP) } 
  // calculate damage dealt to the mob
  const damageDealt = (Math.ceil(player.weapon.atkPower / 2)) + (Math.ceil(Math.random() * (player.weapon.atkPower / 2)))
  // calculate damage taken
  const damageTaken = (Math.max(0, (Math.ceil(Math.random() * req.body.mobAtkPower) - player.armor.defPower)))
  // make an object with the two
  const results = { "damageDealt": damageDealt, "damageTaken": damageTaken}
  // update the player's HP total in the database
  
  req.body.mobHP -= damageDealt;
  if (player.curHitPoints > 0 && req.body.mobHP > 0) {
    UserModel.updateOne(playerId, {curHitPoints: player.curHitPoints -= damageTaken} ).exec('updateOne')
    .then( res.json( { results, curHitPoints: player.curHitPoints, mobHP: req.body.mobHP } ) ) }
  }) 


// POST route to register a user
app.post('/api/register', function(req, res) {
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    const { email, password, name, sex, creationDate } = req.body
    UserModel.create({ email, password, name, sex, 
        level: 1, 
        xp: 0, 
        curHitPoints: 20, 
        maxHitPoints: 20, 
        cashInHand: 0, 
        cashInStash: 0, 
        cashInBank: 0, 
        weapon: { name: " fists", sellPrice : 0, atkPower : 3}, 
        armor: { name: " none", sellPrice : 0, defPower : 1}, 
        outfit: "Shabby Urchin Gear", 
        reputation: "Anonymous Nobody",
        repScore: 0, 
        location: "", 
        pveFights: 15,
        pvpFights: 3,
        lockedOut: false,
        tagsToday: 0,
        creationDate
        }, 
        function(err) {
      if (err) {
        res.status(500)
          .send("Error registering new user please try again.");
      } else {
        const payload = {email} ;
        const token = jwt.sign(payload, JWTSecret, {
          expiresIn: '1h'
        });
        res.cookie('token', token, { httpOnly: true })
          .status(200).send("Welcome to the jungle, baby!");
      }
    });
  });

// POST route to authenticate email and password
app.post('/api/authenticate', function(req, res) {
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    const { email, password } = req.body;
    UserModel.findOne({ email }, function(err, user) {
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
            res.cookie('token', token, { httpOnly: false })
              .sendStatus(200);
            console.log('Authentication successful!')
          }
        });
      }
    });
  });
  
app.get('/api/getTags', (req, res) => {
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    TagModel.find(function (err, tags) {
        if (err) return console.error(err);
        res.send(tags);
    });
    console.log('Sent array of tag objects')
});

app.post('/api/postTag', (req, res) => {
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    TagModel.create({ text: req.body.text, author: req.body.author, time: req.body.time });
    res.send(console.log('Tag posted to DB'))
});

app.use(express.static(path.join(__dirname,'/public')));

// Handles any requests that don't match the ones above
app.get('/', function (req, res, next) {
    res.sendFile(path.resolve('public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Express server is running on ' + port));
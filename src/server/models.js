const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: ' ));
db.once('open', function() {
    // connected!
});

const grafSchema = new mongoose.Schema({
    text: String,
    author: String,
    date: String
})

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
})


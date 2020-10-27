const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const saltRounds = 10;

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: {type: String, required: true },
    name: { type: String, unique: true}, 
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
});

userSchema.pre('save', function(next) {
    // Check if document is new or a new password has been set
  if (this.isNew || this.isModified('password')) {
    // Saving reference to this because of changing scopes
    const document = this;
    bcrypt.hash(document.password, saltRounds,
      function(err, hashedPassword) {
      if (err) {
        next(err);
      }
      else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

module.exports = mongoose.model('User', userSchema);
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

const Graffiti = mongoose.model('Graffiti', grafSchema);
const grafTest1 = new Graffiti({ text: {input}, author: {/*user.name*/}, 
    date: new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString() });


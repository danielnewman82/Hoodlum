const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../../public/')));

const tagSchema = new mongoose.Schema({
    text: String,
    author: String,
    date: String
    });
    
const Tag = mongoose.model('Tag', tagSchema);

// An api endpoint that returns a short list of items
/* what this is supposed to do:
    1. connect to MongoDB
    2. find all documents in that collection
    3. return an array of the documents in the response, for React to use as local state 
*/
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

app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'../../../public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
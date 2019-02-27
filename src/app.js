const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router');

mongoose.connect('mongodb://localhost:27017/shalomLocal', {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

//conect do MongoDB
db.once('open', () =>{
    console.log('connected to DB');
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//use routes
router(app);

// listen on port
app.listen(3002, ()=>{
    console.log('Express listening on port 3002');
});

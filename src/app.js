const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');

mongoose.connect('mongodb://localhost:27017/shalomLocal', {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

//conect do MongoDB
db.once('open', () =>{
    console.log('connected to DB');
});

app.use(cors({
    credentials:true,
    origin: ['http://localhost:3000']
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//Session of user
app.set('trust proxy', 1); // trust first proxy
app.use(session({
    secret: 'L0La An/V3r',
    resave: true,
    saveUninitialized: true,
    cookie: {secure:false},
    store: new FileStore
}));

//use routes
router(app);

// listen on port
app.listen(3002, ()=>{
    console.log('Express listening on port 3002');
});

const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');
const settings = require('../settings/settings');

mongoose.connect(settings.DB_PATH, 
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

//conect do MongoDB
db.once('open', () =>{
    console.log('connected to DB');
});

app.use(cors({
    credentials:true,
    origin: settings.CORS_ALLOWED_ORIGINS
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//Session of user
app.set('trust proxy', 1); // trust first proxy
app.use(session({
    secret: settings.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {secure:false}, // MAYBE WILL HAVE TO CHANGE ON PRODUCTION
    store: new FileStore
}));

//use routes
router(app);

// listen on port
app.listen(settings.PORT, ()=>{
    console.log('Express listening on port 3002');
});

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const router = require('./routes/router');

mongoose.connect('mongodb://localhost/shalomLocal', {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

//conect do MongoDB
db.once('open', () =>{
    console.log('connected to DB');
});

//use routes
router(app);

// listen on port
app.listen(3002, ()=>{
    console.log('Express listening on port 3002')
});

// test

// const userData = {
//     email: 'fran@mobiliza.com',
//     password: '1',
//     username: 'Fran'
// }

// User.create(userData, (err, user) =>{
//     if(err){
//         console.log('err', err);
//     }else{
//         console.log('criado');
//     }
// });

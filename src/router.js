// The routes provided by the API

const addUserController = require('./controllers/addUser');

function router(app){
    app.get('/', (req, res) => res.send('Shalom app'));
    app.post('/addUser', addUserController);
};

module.exports = router;
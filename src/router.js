// The routes provided by the API

const addUserController = require('./controllers/addUser');
const loginController = require('./controllers/login');
function router(app){
    app.get('/', (req, res) => res.send('Shalom app'));
    app.post('/addUser', addUserController);
    app.post('/login', loginController);
};

module.exports = router;
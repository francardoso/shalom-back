// The routes provided by the API

const addUserController = require('./controllers/addUser');
const loginController = require('./controllers/login');
const isLoggedController = require('./controllers/isLogged');
function router(app){
    app.get('/', (req, res) => res.send('Shalom app'));
    app.post('/addUser', addUserController);
    app.post('/login', loginController);
    app.post('/isLogged', isLoggedController);
};

module.exports = router;
// The routes provided by the API

const addUserController = require('./controllers/addUser');
const loginController = require('./controllers/login');
const isLoggedController = require('./controllers/isLogged');
const addItemController = require('./controllers/addItem');
const getAllItems = require('./controllers/getAllItems');
const getItem = require('./controllers/getItem');
const deleteItem = require('./controllers/deleteItem');
const editItem = require('./controllers/editItem');
function router(app){
    app.get('/', (req, res) => res.send('Shalom app'));
    app.post('/addUser', addUserController);
    app.post('/login', loginController);
    app.get('/isLogged', isLoggedController);
    app.post('/addItem', addItemController);
    app.post('/getAllItems', getAllItems);
    app.post('/getItem', getItem);
    app.post('/deleteItem', deleteItem);
    app.put('/editItem', editItem);
};

module.exports = router;
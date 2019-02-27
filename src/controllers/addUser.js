// Adds a user to DB
const addUserModel = require('../models/addUser');
function addUser(req, res){
    if(!checkBodyParams(req.body)){
        return res.status(404).send('INVALID PARAMETERS');
    }
    const context = {
        login: req.body.login,
        password: req.body.password,
        name: req.body.name
    };
    addUserModel(context, (result)=>{
        res.json(result);
    });
};

// Check if all params are provide by the request
function checkBodyParams(body){
    if(typeof body.login !== 'string' || !body.password || !body.name){
        return false;
    }
    return true;
}

module.exports = addUser;
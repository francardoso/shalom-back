// Attempts do login
const loginModel = require('../models/login');
function login(req, res){
    if(!checkBodyParams(req.body)){
        return res.status(404).send('INVALID PARAMETERS');    
    };

    const context = {
        login: req.body.login,
        password: req.body.password
    }

    loginModel(context, (ans) =>{
        if(ans.error){
            return res.json(ans);
        }else{
            req.session.userId = ans.userId;
            return res.json(ans);
        }
    });

};

// Check if all params are provide by the request
function checkBodyParams(body){
    if(typeof body.login !== 'string' || !body.password){
        return false;
    }
    return true;
}
module.exports = login;
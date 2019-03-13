//check if user is already loggedIn

function isLogged(req, res){
    if(req.session && req.session && req.session.userId){
        res.json({
            isLogged: true, 
            userId: req.session.userId
        })
    }else{
        res.json({
            isLogged: false
        })
    }
};

module.exports = isLogged;
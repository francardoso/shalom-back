const getItemModel = require('../models/getItem');
function getItem(req, res){
    if(!checkBodyParams(req.body)){
        return res.status(404).send('INVALID PARAMETERS');    
    }

    getItemModel(req.body, result => {
        res.json(result);
    });    
};

function checkBodyParams(body){
    if(typeof body.id !== 'string' || body.id.trim() === ''){
        return false;
    }
    return true;
}

module.exports = getItem;
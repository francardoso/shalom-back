// Delete an item in DB
const deleteItemModel = require('../models/deleteItem');
function deleteItem(req, res){
    if(!checkBodyParams(req.body)){
        return res.status(404).send('INVALID PARAMETERS');
    }
    const context = {
        id: req.body.id
    };
    deleteItemModel(context, (result)=>{
        res.json(result);
    });
};

// Check if all params are provide by the request
function checkBodyParams(body){
    if(typeof body.id !== 'string' || body.id.trim() === ''){
        return false;
    }
    return true;
}

module.exports = deleteItem;
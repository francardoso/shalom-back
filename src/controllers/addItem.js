// Adds Item to DB
const addItemModel = require('../models/addItem');

function addItem(req, res){
    if(!checkBodyParams(req.body)){
        return res.status(404).send('INVALID PARAMETERS');
    }
    const context = {
        name: req.body.name,
        description: req.body.description,
        image_url: req.body.image_url,
        in_stock: req.body.in_stock
    };

    addItemModel(context, result =>{
        if(!result.error){
            res.json(result);
        }else{
            res.status(500).send('Not able to add item');
        }
    });
};

function checkBodyParams(body){
    if(typeof body.name !== 'string'){
        return false;
    }
    return true;
}

module.exports = addItem;
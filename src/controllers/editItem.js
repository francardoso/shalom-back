// edit item
const editItemModel = require('../models/editItem');
function editItem(req, res){
    if(!checkBodyParams(req.body)){
        return res.status(404).send('INVALID PARAMETERS');
    }
    const context = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        image_url: req.body.image_url,
        in_stock: req.body.in_stock
    }
    
    editItemModel(context, (result)=>{
        if(!result.error){
            res.json(result);
        }else{
            res.json(result.error.message);
        }        
    });
};
function checkBodyParams(body){
    if(typeof body.id !== 'string'){
        return false;
    }
    return true;
}

module.exports = editItem;
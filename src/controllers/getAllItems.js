// GET all Items from DB
const getAllItemsModel = require('../models/getAllItems');

function getAllItems(req, res){
    const context = {
        ...req.body
    }

    getAllItemsModel(context, result =>{
        res.json(result);   
    });
};


module.exports = getAllItems;
// GET all Items from DB
const getAllItemsModel = require('../models/getAllItems');

function getAllItems(req, res){

    getAllItemsModel(null, result =>{
        res.json(result);   
    });
};


module.exports = getAllItems;
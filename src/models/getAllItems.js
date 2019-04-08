const ItemSchema = require('../schemas/Item');
function getAllItems(context, cb){
    ItemSchema.find(context, (error, items)=>{
        if(error){
            cb({
                error
            })
        }else{
            cb({
                error: null,
                items
            })
        }
    });
};

module.exports = getAllItems;
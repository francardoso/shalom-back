const mongoose = require('mongoose');
const ItemSchema = require('../schemas/Item');
function deleteItem(context, cb){
    const id = context.id.trim();
    try{
        const mongoID = mongoose.Types.ObjectId(id)
        ItemSchema.findByIdAndUpdate(mongoID, {active: false},(error, item)=>{
            if(error){
                cb({
                    error
                });
            }else{
                cb({
                    error: null,
                    item
                });
            }
        });
    }catch(err){
        cb({
            error: JSON.stringify(err, Object.getOwnPropertyNames(err))
        })
    };
};

module.exports = deleteItem;
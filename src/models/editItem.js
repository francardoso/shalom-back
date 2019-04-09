const mongoose = require('mongoose');
const ItemSchema = require('../schemas/Item');
function editItem(context, cb){
    //Delete undefined properties
    for(key in context){
        if(!context[key]){
            delete context[key]
        }
    }
    try{
        const id = mongoose.Types.ObjectId(context.id.trim());
        ItemSchema.findOneAndUpdate({_id:id}, context,(error, item) =>{
            if(error){
                cb({
                    error 
                })
            }else{
                if(!item){
                    const error = new Error('Item not found');
                    cb({
                        error
                    })
                }else{
                    cb({
                        error: null,
                        msg: 'updated'
                    })
                }
            }
        });
    }catch(err){
        cb({
            error: JSON.stringify(err, Object.getOwnPropertyNames(err))
        })
    }
};

module.exports = editItem;
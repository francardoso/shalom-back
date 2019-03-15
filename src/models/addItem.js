const ItemSchema = require('../schemas/Item');
function addItem(context, cb){
    const item = new ItemSchema();
    item.name = context.name;
    item.description = context.description || "";
    item.image_url = context.image_url || "";
    item.in_stock = context.in_stock || 0; 

    item
        .save()
        .then((savedItem)=>{
            cb({
                error: null,
                msg: 'Item inserted',
                id: savedItem.id
            });
            return;
        });
};

module.exports = addItem;
const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    name: String,
    description: String,
    image_url: String,
    in_stock: Number,
    active: {
        default: true,
        type: Boolean
    }
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
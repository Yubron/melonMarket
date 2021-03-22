const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    // no : { auto-increment }
    
    title: {
        type: String,
    },
    price: {
        type: String,
    },
    description: {
        type: String,
    },
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

const Product = mongoose.model('Product', productSchema);
module.exports = { Product }
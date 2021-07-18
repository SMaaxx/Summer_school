import mongoose from 'mongoose';

const Product = new mongoose.Schema({
    sku: {type: String, required: true},
    name: {type: String, required: true},
    type: {type: String, required: true},
    cost: {type: Number, required: true}
});

export default mongoose.model('Product', Product)
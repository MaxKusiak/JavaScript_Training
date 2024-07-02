import mongoose from 'mongoose';
import { uuid } from 'uuidv4';

const { Schema } = mongoose;

const ProductCategorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        products: [
            {
                type: String,
                ref: 'Product',
            },
        ]
    });

export default mongoose.model('ProductCategory', ProductCategorySchema);
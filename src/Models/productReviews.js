import mongoose from 'mongoose';
import { uuid } from 'uuidv4';

const { Schema } = mongoose;

const ProductReviewsSchema = new mongoose.Schema(
    {
        reviews: [
            {
                type: String,
                ref: "Product",
            },
        ]
    });

export default mongoose.model('ProductReviews', ProductCategorySchema);
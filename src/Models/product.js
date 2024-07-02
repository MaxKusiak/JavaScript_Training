import mongoose from 'mongoose';
import { uuid } from 'uuidv4';
import User from "./user.js";
import ProductReviews from "./productReviews.js"

const { Schema } = mongoose;

const ProductSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            default: uuid,
        },
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            default: uuid,
            required: true,
            ref: 'User',
        },
        text: {
            type: String,
            required: true,
        },
        reviews: {
            ref: 'ProductReviews'
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        }

    });

export default mongoose.model('Product', ProductSchema);
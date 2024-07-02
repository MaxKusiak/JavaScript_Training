import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import productRouter from './src/Routers/product.router.js';
import productCategoryRouter from './src/Routers/productCategory.router.js';
import productReviewsRouter from './src/Routers/productReviews.router.js';

const app = express()

mongoose.connect(process.env.DB_URL)
.then(() => console.log('Connected!'))
.catch(()=> console.log('Failed'));

app.use(express.json())

app.use('/api', productRouter);
app.use('/api', productCategoryRouter);
app.use('/api', productReviewsRouter);

app.get('/', (req, res) => {
  res.send('This is the main page')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
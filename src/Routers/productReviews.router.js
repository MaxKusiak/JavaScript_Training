import Router from 'express';

import  {
    getProductReviews,
    getProductReview,
    createProductReview,
    updateProductReview,
    deleteProductReviews
  }  from '../Controllers/productReviews.controller.js'

const postRouter = new Router();

postRouter.post('/productReview/:productId', createProductReview); //Create
postRouter.get('/productReviews/:productId', getProductReviews); //Read
postRouter.get('/productReviews/:productId/:productReviewId', getProductReview); //Read
postRouter.put('/productReviews/:productId/:productReviewId', updateProductReview); //Update
postRouter.delete('/productReviews/:productId/:productReviewId', deleteProductReviews); //Delete

 
export default productReviewsRouter;
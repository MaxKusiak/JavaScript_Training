import Router from 'express';

import  {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
  }  from '../Controllers/product.controller.js'

const postRouter = new Router();

postRouter.post('/product', createProduct); //Create
postRouter.get('/products', getProducts); //Read
postRouter.get('/product/:productId', getProduct); //Read
postRouter.put('/product/:id', updateProduct); //Update
postRouter.delete('/product/:id', deleteProduct); //Delete

 
export default productRouter;
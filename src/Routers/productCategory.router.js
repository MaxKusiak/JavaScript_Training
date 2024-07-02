import Router from 'express';

import  {
    getProductCategorys,
    getProductCategory,
    createProductCategory,
    updateProductCategory,
    deleteProductCategory
  }  from '../Controllers/productCategory.controller.js'

const postRouter = new Router();

postRouter.post('/productCategory', createProductCategory); //Create
postRouter.get('/productCategorys', getProductCategorys); //Read
postRouter.get('/productCategory/:productCategoryId', getProductCategory); //Read
postRouter.put('/productCategory/:id', updateProductCategory); //Update
postRouter.delete('/productCategory/:id', deleteProductCategory); //Delete

 
export default productCategoryRouter;
//import Post from '../Models/post.js'

export const getProductReviews = ((req, res) => {
    const id = Number(req.params.productId);
    res.send("Ви отримали всі відгуки продукту з id " + id);
})

export const getProductReview = ((req, res) => {
    const productId = Number(req.params.productId);
    const productReviewId = Number(req.params.productReviewId);
    
    res.send("Ви отримали відгук з id " + productReviewId + " продукту з id " + productId);
})

export const createProductReview = ((req, res) => {
    const id = Number(req.params.productId);
    res.send("Ви створили новий відгук продукту з id " + id);
    res.status(211).json("newProduct")
})

export const updateProductReview = ((req, res) => {
    const productId = Number(req.params.productId);
    const productReviewId = Number(req.params.productReviewId);
    res.send("Ви змінили відгук з id " + productReviewId + " про продукт з id" + productId);
    //res.status(200).json('Product updated')
})

export const deleteProductReviews = ((req, res) => {
    const productId = Number(req.params.productId);
    const productReviewId = Number(req.params.productReviewId);
    res.send("Ви видалили відгук з id " + productReviewId + " про продукт з id" + productId);
})
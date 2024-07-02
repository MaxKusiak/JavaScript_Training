//import Post from '../Models/post.js'

export const getProductCategorys = ((req, res) => {
    res.send("Ви отримали всі категорії продуктів.");
})

export const getProductCategory = ((req, res) => {
    const id = Number(req.params.productCategoryId)
    
    res.send("Ви отримали категорію продуктів з id " + id);
})

export const createProductCategory = ((req, res) => {
    //res.send("Ви створили новий пост");
    res.status(211).json("newProduct")
})

export const updateProductCategory = ((req, res) => {
    const id = Number(req.params.id);

    res.send("Ви змінили категорію продуктів з ID " + id);
    //res.status(200).json('Product updated')
})

export const deleteProductCategory = ((req, res) => {
    const id = Number(req.params.id);
    res.send("Ви видалили категорію продуктів з ID " + id);
})
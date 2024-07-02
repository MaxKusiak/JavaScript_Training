//import Post from '../Models/post.js'

export const getProducts = ((req, res) => {
    res.send("Ви отримали всі продукти.");
})

export const getProduct = ((req, res) => {
    const id = Number(req.params.productId)
    
    res.send("Ви отримали продукт з id " + id);
})

export const createProduct = ((req, res) => {
    //res.send("Ви створили новий пост");
    res.status(211).json("newProduct")
})

export const updateProduct = ((req, res) => {
    const id = Number(req.params.id);

    res.send("Ви змінили продукт з ID " + id);
    //res.status(200).json('Product updated')
})

export const deleteProduct = ((req, res) => {
    const id = Number(req.params.id);
    res.send("Ви видалили продукт з ID " + id);
})
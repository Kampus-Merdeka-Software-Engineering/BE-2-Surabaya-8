const productsService = require('../services/productsService');

async function getAllProducts(req, res) {
 res.json({
  books: [{
    title: 'mantab dong js'
}]
});
  // const products = await productsService.getAllProducts();
  // res.json(products)
};

async function getProductById(req, res) {
  const products = await productsService. getProductById();
  res.json(products)
};

async function createProduct(req, res) {
  const product = req.body;

  const productService = await createProduct(product);
  res.Status(201).json(createdProduct);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct
};
const prisma = require('../config/prisma');

async function getAllProducts() {
    try {
      const products = await prisma.products.findMany();

      return products;
    } catch (err) {
      throw err;
    }
};

async function getProductById() {
    try {
        const productId = parseInt(req.params.id);
      
      return products;
    } catch (err) {
      throw err;
    }
};


async function createProduct(product){
    try {
        return await prisma.product.create(product);
      } catch (err) {
        throw err;
      }
}

module.exports = {
    getAllProducts,
    createProduct
};
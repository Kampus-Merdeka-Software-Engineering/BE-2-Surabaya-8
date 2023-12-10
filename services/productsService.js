const prisma = require('../config/prisma');

    // Ambil semua produk dari database
async function getAllProducts() {
  try {
    const products = await prisma.products.findMany();
    return {
      message: 'Products retrieved successfully',
      products,
    };
  } catch (error) {
    console.error('Error retrieving products:', error);
    throw {
      status: 500,
      message: 'Internal Server Error',
      error: error.message,
    };
  }
}

// ambil data produk sesuai kategori
async function getProductsByIdCategory(id_category) {
  try {
    const products = await prisma.products.findMany({
      where: {
        id_category: parseInt(id_category, 10),
      },
    });
    return {
      message: 'Products retrieved successfully',
      products,
    };
  } catch (error) {
    console.error('Error retrieving products by category:', error);
    throw {
      status: 500,
      message: 'Internal Server Error',
      error: error.message,
    };
  }
}

// membuat data baru untuk produk
async function createProducts(productData) {
  try {
    const product = await prisma.products.create({
      data: productData,
    });
    return {
      message: 'Product created successfully',
      product,
    };
  } catch (error) {
    console.error('Error creating product:', error);
    throw {
      status: 500,
      message: 'Internal Server Error',
      error: error.message,
    };
  }
}

module.exports = {
  getAllProducts,
  getProductsByIdCategory,
  createProducts,
};

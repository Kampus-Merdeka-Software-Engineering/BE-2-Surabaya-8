const prisma = require('../config/prisma');

async function getAllProducts() {
  try {
    // Ambil semua produk dari database
    const products = await prisma.products.findMany();

    res.status(200).json({
      message: 'Products retrieved successfully',
      products,
    });
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

async function getProductsByIdCategory() {
  try {
    const idCategory = parseInt(req.params.id_category, 10);

    const products = await prisma.products.findMany({
      where: {
        id_category: idCategory,
      },
    });

    res.status(200).json({
      message: 'Products retrieved successfully',
      products,
    });
  } catch (error) {
    console.error('Error retrieving products by category:', error);
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

async function createProducts() {
  try {
    const { id_category, title, price, location, description, benefits, thumbnail, images } = req.body;

    const product = await prisma.products.create({
      data: {
        id_category,
        title,
        price,
        location,
        description,
        benefits,
        thumbnail,
        images,
      },
    });

    res.status(201).json({
      message: 'Product created successfully',
      product,
    });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  } 
};



module.exports = {
  getAllProducts,
  getProductsByIdCategory,
  createProducts,
};
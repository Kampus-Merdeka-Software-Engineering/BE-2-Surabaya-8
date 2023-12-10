const prisma = require('../config/prisma');

// mendapatkan semua produk dari database
async function getAllProducts(req, res) {
  try {
    const products = await prisma.products.findMany();
    res.status(200).json({
      message: 'get all products successfully',
      products,
    });
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
}

async function getProductsByIdCategory(req, res) {
  try {
    // Validasi id_category
    const validCategories = [1, 2, 3];
    const idCategory = parseInt(req.params.id_category, 10);

    if (!validCategories.includes(idCategory)) {
      return res.status(400).json({
        message: 'Invalid category ID',
      });
    }

    // Jika validasi berhasil, lanjutkan dengan mencari produk
    const products = await prisma.products.findMany({
      where: {
        id_category: idCategory,
      },
    });

    return res.status(200).json({
      message: 'get products successfully by category',
      products,
    });
  } catch (error) {
    console.error('Error retrieving products by category:', error);
    return res.status(error.status || 500).json({
      message: error.message || 'Internal Server Error',
      error: error.error || error.message,
    });
  }
}

// Fungsi untuk membuat produk baru
async function createProducts(req, res) {
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
}

module.exports = {
  getAllProducts,
  getProductsByIdCategory,
  createProducts,
};

const productsService = require('../services/productsService');

async function getAllProducts(req, res) {
  const products = await productsService.getAllProducts();
  res.json(products);
};

async function getProductsByIdCategory(req, res) {
  const products = await productsService. getProductsByIdCategory();
  res.json(products);
};

async function createProducts(req, res) {
  const products = await productsService. createProducts();
  res.json(products);
};

module.exports = {
  getAllProducts,
  getProductsByIdCategory,
  createProducts,
};
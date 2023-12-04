const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/products', productsController.getAllProducts);
router.get('/products/category/:id_category', productsController.getProductsByIdCategory);
router.post('/products', productsController.createProducts);


module.exports = router;




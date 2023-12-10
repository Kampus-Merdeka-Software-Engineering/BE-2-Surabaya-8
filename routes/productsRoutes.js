const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/', productsController.getAllProducts);
router.get('/category/:id_category', productsController.getProductsByIdCategory);
router.post('/', productsController.createProducts);

module.exports = router;

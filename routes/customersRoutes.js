const express = require('express');
const router = express.Router();

const CustomersController = require('../controllers/customersController');

// Handler untuk GET pada endpoint '/'
router.get('/customers', CustomersController.getAllCustomers);

// Handler untuk POST pada endpoint '/'
router.post('/register', CustomersController.createCustomers);

// Handler untuk POST pada endpoint '/login'
router.post('/login', CustomersController.loginCustomers);

module.exports = router;



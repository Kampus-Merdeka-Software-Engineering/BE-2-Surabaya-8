const express = require('express');
const router = express.Router();

const CustomersController = require('../controllers/customersController');

router.get('/', CustomersController.getAllCustomers);
router.post('/', CustomersController.createCustomers);
router.post('/login', CustomersController.loginCustomers); // Sesuaikan nama fungsi

module.exports = router;



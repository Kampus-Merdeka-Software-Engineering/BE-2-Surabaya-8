const express = require('express');
const router = express.Router();

const customersController = require('../controllers/customersController');

router.get('/customers', customersController.getAllCustomers);
router.post('/customers', customersController.createCustomers);

module.exports = router;




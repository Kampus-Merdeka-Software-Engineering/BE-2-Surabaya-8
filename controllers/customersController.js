const customersService = require('../services/customersService');

async function getAllCustomers(req, res) {
  const customers = await customersService.getAllCustomers();
  res.json(customers)
};

async function createCustomers(req, res) {
    const customers = await customersService.createCustomers();
    res.json(customers)
  };

module.exports = {
  getAllCustomers,
  createCustomers,
};
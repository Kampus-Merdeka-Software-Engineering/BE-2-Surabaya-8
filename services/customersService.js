const prisma = require('../config/prisma');

    // Ambil semua data customer dari database
async function getAllCustomers() {
  try {
    const customers = await prisma.customers.findMany();

    return {
      message: 'Custommers retrieved successfully',
      customers,
    };
  } catch (error) {
    console.error('Error retrieving customers:', error);
    throw {
      status: 500,
      message: 'Internal Server Error',
      error: error.message,
    };
  }
}

// membuat data baru customers
async function createCustomers(customerData) {
  try {
    const customer = await prisma.customers.create({
      data: customerData,
    });
    return {
      message: 'Customer created successfully',
      customer,
    };
  } catch (error) {
    console.error('Error creating Customer:', error);
    throw {
      status: 500,
      message: 'Internal Server Error',
      error: error.message,
    };
  }
}

module.exports = {
  getAllCustomers,
  createCustomers,
};
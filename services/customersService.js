const prisma = require('../config/prisma');

async function getAllCustomers() {
  try {
    // Ambil semua customer dari database
    const customers = await prisma.customers.findMany();

    res.status(200).json({
      message: 'Customers retrieved successfully',
      products,
    });
  } catch (error) {
    console.error('Error retrieving customers:', error);
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

async function createCustomers() {
    try {
        const { username, email, password } = req.body;
    
        const customer = await prisma.customers.create({
          data: {
            username,
            email,
            password,
            phone:"null",
            message:"null",
          },
        });
    
        res.status(201).json({
          message: 'Customer created successfully',
          customer,
        });
      } catch (error) {
        console.error('Error creating customer:', error);
        res.status(500).json({
          message: 'Internal Server Error',
          error: error.message,
        });
      }
} 


module.exports = {
  getAllCustomers,
  createCustomers,
};
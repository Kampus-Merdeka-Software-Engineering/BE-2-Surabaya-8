const prisma = require('../config/prisma');
const customersService = require('../services/customersService');

// MENDAPATKAN SEMUA DATA CUSTOMERS
async function getAllCustomers(req, res) {
  const customers = await customersService.getAllCustomers();
  res.json(customers);
}

// VALIDASI UNTUK LOGIN
async function loginCustomers(req, res) {
  const { username, password } = req.body;

  try {
    const user = await prisma.customers.findMany({
      where: {
        username: username,
      }
    });

    console.log('Input Password:', password);
    console.log('User:', user);

    if (!user || user.length === 0) {
      console.log('Incorrect username.');
      return res.status(401).json({ message: 'Incorrect username.' });
    }

    // Membandingkan password 
    if (password !== user[0].password) {
      console.log('Incorrect password.');
      return res.status(401).json({ message: 'Incorrect password.' });
    }

    console.log('Login successful.');
    res.status(200).json({ message: 'Login successful.', username: user[0].username });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

// MEMBUAT DATA CUSTOMERS
async function createCustomers(req, res) {
  const customerData = req.body;
  const customers = await customersService.createCustomers(customerData);
  res.json(customers);
}

module.exports = {
  getAllCustomers,
  createCustomers,
  loginCustomers,
};


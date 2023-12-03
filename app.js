require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

const response = require('./response.js')
app.get('/', (req, res) => {
    const data = {

   }
    response(200, data, "Request successful", res)
})

//GET ALL PRODUCTS
app.get('/products', async (req, res) => {
  try {
    // Ambil semua produk dari database
    const products = await prisma.products.findMany();

    res.status(200).json({
      message: 'Products retrieved successfully',
      products,
    });
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
});

// GET ALL CUSTOMERS
app.get('/customers', async (req, res) => {
  try {
    const customers = await prisma.customers.findMany();

    res.status(200).json({
      message: 'Customers retrieved successfully',
      customers,
    });
  } catch (error) {
    console.error('Error retrieving customers:', error);
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
});

//POST UNTUK PRODUCT
app.post('/products', async (req, res) => {
    try {
      const { id_category, title, price, location, description, benefits, thumbnail, images } = req.body;
  
      const product = await prisma.products.create({
        data: {
          id_category,
          title,
          price,
          location,
          description,
          benefits,
          thumbnail,
          images,
        },
      });
  
      res.status(201).json({
        message: 'Product created successfully',
        product,
      });
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({
        message: 'Internal Server Error',
        error: error.message,
      });
    } 
  });

// POST UNTUK CUSTOMERS
app.post('/customers', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const customer = await prisma.customers.create({
      data: {
        username,
        email,
        password,
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
});

// const productsRoutes = require('./routes/productsRoutes')

// app.use(productsRoutes)

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something went wrong!');
//   });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Click this link to check It : http://localhost:${PORT}`)
})
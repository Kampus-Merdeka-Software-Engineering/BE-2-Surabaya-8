require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

// const bodyParser = require('body-parser');

// const productsRoutes = require('./routes/productsRoutes');

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// const { products } = require('./config/prisma');

app.use(express.json());

const response = require('./response.js');
app.get('/', (req, res) => {
    const data = {

   }
    response(200, data, "Request successful", res)
})


app.post('/products', async (req, res) => {
    try {
        const { id_category, title, price, location, description, benefits, thumbnail, images } = req.body;
        
        // Membuat produk baru dengan beberapa URL gambar
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
      

// app.get('/customers', async (req, res) => {
//     const customer = await prisma.customers.findMany();
//     res.json(customers);
//   }
// );

app.post('/customers', async (req, res) => {
    try {
        const { nama, email, password } = req.body;

        // Membuat customer baru dengan beberapa URL gambar
        const customer = await prisma.customers.create({
            data: {
              nama,
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

// app.use(productsRoutes)  

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

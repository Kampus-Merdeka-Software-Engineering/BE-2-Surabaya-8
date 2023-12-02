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


const productsRoutes = require('./routes/productsRoutes')

app.use(productsRoutes)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Click this link to check It : http://localhost:${PORT}`)
})
// import library 

const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

const bodyParser = require('body-parser');

const productsRoutes = require('./routes/productsRoutes');

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const response = require('./response.js');
const { products } = require('./config/prisma');

app.use(productsRoutes);

app.use(express.json())

app.get('/', (req, res) => {
    const data = {

   }
    response(200, data, "Request successful", res)
})

app.get('/customers', async (req, res) => {
      const customers = await prisma.customers.findMany();
      res.json(customers);
    }
);

app.post('/products', async (req, res, next) => {
    const newProductsData = req.body;

    try {
        const product = await prisma.products.create({
            data: {
                id_category: newProductsData.id_category,
                title: newProductsData.title,
                price: newProductsData.price,
                location: newProductsData.location,
                description: newProductsData.description,
                benefits: newProductsData.benefits,
                thumbnail: newProductsData.thumbnail,
                images: newProductsData.images
            }
        });

        console.log('Data customer baru ditambahkan:', products);
        res.send("Create customer success");
    } catch (error) {
        console.error('Gagal menambahkan data customer baru:', error);
        res.status(500).send('Gagal menambahkan data customer baru');
    }
});
      

app.get('/customers', async (req, res) => {
    const customers = await prisma.customers.findMany();
    res.json(customers);
  }
);

app.post('/customers', async (req, res, next) => {
    const newCustomerData = req.body;

    try {
        const customer = await prisma.customers.create({
            data: {
                nama: newCustomerData.nama,
                email: newCustomerData.email,
                password: newCustomerData.password
            }
        });

        console.log('Data customer baru ditambahkan:', customer);
        res.send("Create customer success");
    } catch (error) {
        console.error('Gagal menambahkan data customer baru:', error);
        res.status(500).send('Gagal menambahkan data customer baru');
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

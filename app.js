require('dotenv').config();
const cors = require('cors');
const express = require('express');

const bcrypt = require('bcryptjs');

const app = express();

const productsRoutes = require('./routes/productsRoutes');
const customersRoutes = require('./routes/customersRoutes');

app.use(cors());
app.use(express.json());

app.use('/products', productsRoutes);
app.use('/customers', customersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Click this link to check It : http://localhost:${PORT}`)
})

//GET ALL PRODUCTS
// app.get('/products', async (req, res) => {
//   try {
//     // Ambil semua produk dari database
//     const products = await prisma.products.findMany();

//     res.status(200).json({
//       message: 'Products retrieved successfully',
//       products,
//     });
//   } catch (error) {
//     console.error('Error retrieving products:', error);
//     res.status(500).json({
//       message: 'Internal Server Error',
//       error: error.message,
//     });
//   }
// });

//GET PRODUCT BY CATEGORY
// app.get('/products/category/:id_category', async (req, res) => {
//   try {
//     const idCategory = parseInt(req.params.id_category, 10);

//     const products = await prisma.products.findMany({
//       where: {
//         id_category: idCategory,
//       },
//     });

//     res.status(200).json({
//       message: 'Products retrieved successfully',
//       products,
//     });
//   } catch (error) {
//     console.error('Error retrieving products by category:', error);
//     res.status(500).json({
//       message: 'Internal Server Error',
//       error: error.message,
//     });
//   }
// });

// GET ALL CUSTOMERS
// app.get('/customers', async (req, res) => {
//   try {
//     const customers = await prisma.customers.findMany();

//     res.status(200).json({
//       message: 'Customers retrieved successfully',
//       customers,
//     });
//   } catch (error) {
//     console.error('Error retrieving customers:', error);
//     res.status(500).json({
//       message: 'Internal Server Error',
//       error: error.message,
//     });
//   }
// });

//POST UNTUK PRODUCT
// app.post('/products', async (req, res) => {
//     try {
//       const { id_category, title, price, location, description, benefits, thumbnail, images } = req.body;
  
//       const product = await prisma.products.create({
//         data: {
//           id_category,
//           title,
//           price,
//           location,
//           description,
//           benefits,
//           thumbnail,
//           images,
//         },
//       });
  
//       res.status(201).json({
//         message: 'Product created successfully',
//         product,
//       });
//     } catch (error) {
//       console.error('Error creating product:', error);
//       res.status(500).json({
//         message: 'Internal Server Error',
//         error: error.message,
//       });
//     } 
//   });

// POST UNTUK CUSTOMERS
// app.post('/customers', async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     const customer = await prisma.customers.create({
//       data: {
//         username,
//         email,
//         password,
//         phone:"null",
//         message:"null",
//       },
//     });

//     res.status(201).json({
//       message: 'Customer created successfully',
//       customer,
//     });
//   } catch (error) {
//     console.error('Error creating customer:', error);
//     res.status(500).json({
//       message: 'Internal Server Error',
//       error: error.message,
//     });
//   }
// });

// // Endpoint untuk login
// app.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Temukan pelanggan berdasarkan alamat email
//     const customer = await prisma.customers.findUnique({
//       where: { email },
//     });

//     // Periksa apakah pelanggan ditemukan
//     if (!customer) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Periksa apakah kata sandi cocok
//     const passwordMatch = await bcrypt.compare(password, customers.password);

//     if (!passwordMatch) {
//       return res.status(401).json({ error: 'Invalid password' });
//     }

    // Logika lain sesuai kebutuhan aplikasi
    // ...

//     res.status(200).json({ message: 'Login successful' });
//   } catch (error) {
//     console.error('Error during login:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something went wrong!');
//   });


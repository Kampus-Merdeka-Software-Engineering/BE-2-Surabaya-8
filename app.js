const { PrismaClient } = require('@prisma/client');
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();
const app = express();
// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: '54631',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

// LOGIN 
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await prisma.customers.findUnique({
        where: {
          username: username
        }
      });

      console.log('Input Password:', password);
      console.log('User:', user);

      if (!user) {
        console.log('Incorrect username.');
        return done(null, false, { message: 'Incorrect username.' });
      }

      const isPasswordValid = password === user.password;

      console.log('Is password valid:', isPasswordValid);

      if (!isPasswordValid) {
        console.log('Incorrect password.');
        return done(null, false, { message: 'Incorrect password.' });
      }

      console.log('Login successful.');
      // Mengirimkan pesan ke console dan menyimpan pesan serta username ke localStorage
      done(null, { message: 'Login successful.', username: user.username });
    } catch (err) {
      console.error('Error in Passport LocalStrategy:', err);
      return done(err);
    }
  }
));

app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error('Error during authentication:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    if (!user) {
      console.log('Authentication failed:', info.message);
      // Mengirimkan pesan ke console dan menyimpan pesan ke localStorage
      return res.status(401).json({ message: info.message });
    }

    // Jika autentikasi berhasil
    console.log('Authentication successful.');
    // Mengirimkan pesan ke console dan menyimpan pesan serta username ke localStorage
    res.status(200).json({ message: 'Login successful.', username: user.username });
  })(req, res, next);
});

// PANGGIL RESPONSE
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

//GET ALL TRANSACTIONS
app.get('/transactions', async (req, res) => {
  try {
    // Ambil semua transaksi dari database
    const transactions = await prisma.transaction.findMany();

    res.status(200).json({
      message: 'Transactions retrieved successfully',
      transactions,
    });
  } catch (error) {
    console.error('Error retrieving transactions:', error);
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
});


//GET PRODUCT BY CATEGORY
app.get('/products/category/:id_category', async (req, res) => {
  try {
    const idCategory = parseInt(req.params.id_category, 10);

    const products = await prisma.products.findMany({
      where: {
        id_category: idCategory,
      },
    });

    res.status(200).json({
      message: 'Products retrieved successfully',
      products,
    });
  } catch (error) {
    console.error('Error retrieving products by category:', error);
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

// POST UNTUK SIGN IN a.k.a REGISTER
app.post('/register', async (req, res) => {
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
});

// LOGIN
// app.post('/login', passport.authenticate('local'), (req, res) => {
  // Jika autentikasi berhasil, pengguna akan diarahkan ke sini
//   res.status(200).json({ message: 'Login successful' });
// });

// const productsRoutes = require('./routes/productsRoutes')

// app.use(productsRoutes)

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something went wrong!');
//   });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Click this link to check : http://localhost:${PORT}`)
})
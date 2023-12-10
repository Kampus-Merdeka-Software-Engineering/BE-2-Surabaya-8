const prisma = require('../config/prisma');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const customersService = require('../services/customersService');

// MENDAPATKAN SEMUA DATA CUSTOMERS
async function getAllCustomers(req, res) {
  const customers = await customersService.getAllCustomers();
  res.json(customers);
}

// MEMBUAT DATA CUSTOMERS
async function createCustomers(req, res) {
  const customerData = req.body;
  const customers = await customersService.createCustomers(customerData);
  res.json(customers);
}

// LOGIN
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      // Menggunakan `findUnique` dengan `where` yang sesuai
      const user = await prisma.customers.findUnique({
        where: {
          username: username,
        },
      });


      console.log('Input Password:', password);
      console.log('User:', user);

      // verifikasi kata sandi dan panggil callback done
      // berdasarkan keberhasilan atau kegagalan otentikasi
      if (!user) {
        return done(null, false, { message: 'Username tidak ditemukan' });
      }

      // Lakukan verifikasi kata sandi di sini (sesuai dengan kebutuhan Anda)

      if (user.password !== password) {
        return done(null, false, { message: 'Password salah' });
      }

      // Jika berhasil, kembalikan user ke dalam passport
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

async function loginCustomers(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error('Error during authentication:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    if (!user) {
      console.log('Authentication failed:', info.message);
      return res.status(401).json({ message: info.message });
    }

    console.log('Authentication successful.');
    res.status(200).json({ message: 'Login successful.', username: user.username });
  })(req, res, next);
}

module.exports = {
  getAllCustomers,
  createCustomers,
  loginCustomers,
};


const prisma = require('../config/prisma');
const bcrypt = require('bcryptjs');
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
      done(null, { message: 'Login successful.', username: user.username });
    } catch (err) {
      console.error('Error in Passport LocalStrategy:', err);
      return done(err);
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


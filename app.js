require('dotenv').config();
const cors = require('cors');
const express = require('express');

const bcrypt = require('bcryptjs');

const app = express();

const productsRoutes = require('./routes/productsRoutes');
const customersRoutes = require('./routes/customersRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

app.use(cors());
app.use(express.json())

app.use('/products', productsRoutes);
app.use('/', customersRoutes);
app.use('/transaction', transactionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Click this link to check It : http://localhost:${PORT}`)
})
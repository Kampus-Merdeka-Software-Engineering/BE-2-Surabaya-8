// import library 

const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

const bodyParser = require('body-parser')

const productsRoutes = require('./routes/productsRoutes');

app.use(productsRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
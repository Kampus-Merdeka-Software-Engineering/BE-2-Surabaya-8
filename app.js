require('dotenv').config();
const express = require('express');

const app = express();

const productsRoutes = require('./routes/productsRoutes')

app.use(productsRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
require('dotenv').config();
const express = require('express');

const app = express();

const response = require('./response.js')
app.get('/', (req, res) => {
    const data = {

   }
    response(200, data, "Request successful", res)
})


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
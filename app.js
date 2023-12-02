require('dotenv').config();
const express = require('express');

const app = express();

const productsRoutes = require('./routes/productsRoutes')

app.use(productsRoutes)

const response = require('./response.js')
app.get('/', (req, res) => {
   const data = {
    
   }
    response(200, data, "Request successful", res)
})


// app.get('/category', (req, res) =>{
//     res.json(category);
// } )

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Click this link to check It : http://localhost:${PORT}`)
})
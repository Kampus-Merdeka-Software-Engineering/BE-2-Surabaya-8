// import library 
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./connection')
const response = require('./response')

// routes / url / endpoint utama kita method GET

app.use(bodyParser.json()) // ngambil format dari front end yang kirim ke backend berupa post method, kita ubah jadi json format

app.get('/', (req, res) => {
    db.query("SELECT * FROM product", (error, result) => {
        // hasil data dari myssql
        response(200, result, "get all data from product", res)
    })
})

app.get('/category', (req, res) => {
    db.query("SELECT * FROM category", (error, result) => {
        // hasil data dari myssql
        response(200, result, "get all data from category", res)
    })
})

app.get('/customers', (req, res) => {
    db.query("SELECT * FROM customers", (error, result) => {
        // hasil data dari myssql
        response(200, result, "get all data from customers", res)
    })
})

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
})
// import library 
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

// routes / url / endpoint utama kita method GET

app.use(bodyParser.json()) // ngambil format dari front end yang kirim ke backend berupa post method, kita ubah jadi json format

app.get('/', (req, res) => {
    res.send('Hello Word');
})

// endpoint get all transaction
app.get('/transaction', (req, res) => {
    db.query("SELECT * FROM product", (error, result) => {
        // hasil data dari myssql
        response(200, result, "get all data from product", res)
    })
})

// endpoint get all transaction by id
app.get('/product/:id', (req, res) => {
    const productId = req.params.id;
    res.json({
       message: `Get detail data product by id ${productId} is succesfully`,
        data: {
                id_product: productId,
                id_category: '',
                title: 'Yogyakarta (3D/2N)',
                price: 'Rp 1.285.000',
                location: 'Yogyakarta',
                description: 'Selamat datang di Yogyakarta! Nikmati keindahan Candi Borobudur, Malioboro dan lezatnya kuliner loka',
                benefits: '',
                thumbnail: '',
                image: ''
             }
    })
})

// endpoint post all transaction
app.post('/product', (req, res) => {
    const {name, email, role } = req.body
    
        res.json({
            message: 'Create data customer is successfully',
            data: 
                {
                    name: name,
                    email: email,
                    create_at: '2023/11/27 20:30:00',
                    update_at: '2023/11/27 20:30:00'
                }
        })
    })

// endpoint put all transaction
app.put('/product', (req, res) => {
    console.log({updateData: req.body})
    res.send('update berhasil')
})

// endpoint delte all transaction
app.delete('/product', (req, res) => {
    console.log({deleteData: req.body})
    res.send('delete berhasil')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
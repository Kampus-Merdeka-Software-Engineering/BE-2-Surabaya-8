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

// endpoint get all customers
app.get('/customers', (req, res) => {
    db.query("SELECT * FROM customers", (error, result) => {
        // hasil data dari myssql
        response(200, result, "get all data from customers", res)
    })
})

// endpoint get all customers by id
app.get('/customers/:id', (req, res) => {
    const customersId = req.params.id;
    res.json({
       message: `Get detail data customers by id ${customersId} is succesfully`,
        data: {
                id_customers: customersId,
                id_category: '',
                nama: 'sisil',
                email: 'susil109@gmail.com',
                no_tlpn: 'Y081312216939',
                pesan: 'Selamat datang di Yogyakarta! Nikmati keindahan Candi Borobudur, Malioboro dan lezatnya kuliner loka'
             }
    })
})

// endpoint post all customers
app.post('/customers', (req, res) => {
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

// endpoint put all customers
app.put('/customers', (req, res) => {
    console.log({updateData: req.body})
    res.send('update berhasil')
})

// endpoint delete all customers
app.delete('/customers', (req, res) => {
    console.log({deleteData: req.body})
    res.send('delete berhasil')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
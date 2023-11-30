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

// endpoint get all category
app.get('/category', (req, res) => {
    db.query("SELECT * FROM category", (error, result) => {
        // hasil data dari myssql
        response(200, result, "get all data from category", res)
    })
})

// endpoint get all customers by id
app.get('/category/:id', (req, res) => {
    const categoryId = req.params.id;
    res.json({
       message: `Get detail data category by id ${categoryId} is succesfully`,
        data: {
                id_category: categoryId,
                name: name
             }
    })
})

// endpoint post category
app.post('/category', (req, res) => {
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

// endpoint update category
app.put('/category', (req, res) => {
    console.log({updateData: req.body})
    res.send('update berhasil')
})

// endpoint delete category
app.delete('/category', (req, res) => {
    console.log({deleteData: req.body})
    res.send('delete berhasil')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
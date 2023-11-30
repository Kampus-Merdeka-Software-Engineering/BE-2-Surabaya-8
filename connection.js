const mysql = require('mysql')

const db = mysql.createConnection({
    host        : "localhost", 
    user        : "root", 
    password    : "", 
    database    : "walktotalk_travel"
})

module.exports = db
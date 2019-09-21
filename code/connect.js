require('dotenv').config()
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PASS,
    database: 'bamazon'
});

con.connect(err => {
    if (err) throw err;

});

module.exports = con;
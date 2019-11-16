var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

const PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_db"

});


connection.end(function(err) {

    if (err) throw err;

    console.log("Connected as ID: " + connection.threadId);

});

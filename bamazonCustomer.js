
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

const PORT = process.env.PORT || 3306;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"

});



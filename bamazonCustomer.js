//NPM required packages 
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

//MySQL connection information
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "2541",
    database: "bamazon"

});

//Connection with DB
connection.connect(function(err) {

    if (err) throw err;

    console.log("Connected as ID: " + connection.threadId);

});

//Function to start bamazon and display products
var displayProducts = function() {

    console.log("Welcome to Bamazon! Please, find our inventory bellow.");

    //Query DB
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;

        // Creates a table
        var table = new Table({
            head: ["Item ID", "Product Name", "Department", "Price", "Stock Quantity"]
        });


        // Displays all items for sale
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].department_name,
                res[i].price, res[i].stock_quantity
            ]);
        }
        console.log(table.toString());

        //Prompt to buy products
        inquirer.prompt([{
            name: "itemId",
            type: "input",
            message: "Please, type the Item ID you would like to purchase?",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            name: "quantity",
            type: "input",
            message: "How many of this product would you like to buy?",
            validate: function(value) {
             if (isNaN(value) === false) {
                 return true;
             } else {
                 return false;
             }
            }
        }]).then(function(answers) {
            var chosenId = answers.itemId;
            var chosenQuantity = answers.quantity;
            purchase(chosenId, chosenQuantity);
        });
    });
};
///Take order and update DB
function purchase(ID, quantityNeeded) {

    connection.query("SELECT * FROM products WHERE item_id = " + ID, function(err, res) {
        if (err) throw err;
        //
        if (quantityNeeded <= res[0].stock_quantity) {
            var totalCost = res[0].price * quantityNeeded;

            console.log("Your total is $" + totalCost + ". Thank you for your purchase!");

            //Update quantity in the DB
            connection.query("UPDATE products SET stock_quantity = stock_quantity - " + quantityNeeded + " WHERE item_id = " + ID);
        
        } else {

            console.log("We don't have enough of that item to fulfill your order.");
        };
        //Callback to displayProducts function.
        displayProducts();
    })
}

//Callback to displayProducts function.
displayProducts();
const inquirer = require('inquirer');
const con = require('./connection.js');
const chalk = require('chalk');

const askQuestion = () => {
    con.query(`SELECT * FROM products`, (err, res) => { 
        if (err) throw err;
        let dbLength = res.length
        
        inquirer.prompt([{
            name: 'item_id',
            type: 'input',
            message: 'What item ID would you like to buy?',
            validate: (value) => {
                return (value > dbLength) ? console.log(chalk`{green.bold \r\n We don't have a product with ID: #${value} Please try again} \r\n`) : true;
            }
        }
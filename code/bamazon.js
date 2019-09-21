const inquirer = require('inquirer');
const con = require('./connection.js');
const Table = require('cli-table-redemption');
const chalk = require('chalk');
const customer = require('./bamazonCustomer.js');
const manager = require('./bamazonManager.js');
const supervisor = require('./bamazonSupervisor.js');
const bold = chalk.green.bold; // chalk npm--colors
const table = new Table({ 
    head: [bold('Id'), bold('Product Name'), bold('Department Name'), bold('Price'), bold('Quantity')],
    colWidths: [5, 40, 30, 15, 10], // column width
    colAligns: ['', '', '', 'right', 'right'], 
    style: { 'padding-top': 100 }
});

const options = () => {

    inquirer.prompt([
        {
            name: 'choice',
            type: 'list',
            message: 'Who are you?',
            choices: ['Customer']
        }
    ]).then(answers => {
        switch (answers.choice) {
            case 'Customer':
                showAll(() => {
                    customer();
                });
                break;
                default:
                    console.log(chalk`{bold.green Have a Great Day!}`);
                    con.end();
                    break;
            };
        });
};
/* eslint-disable no-console */
/* eslint-disable no-undef */

//using this shows node requires this to run the cli app
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table3');

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    // run the start function after the connection is made to prompt the user
    //start();
});

function displayProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function (err, products) {
        // let table =  new Table ({head: ["ITEM ID", "PRODUCTS", "DEPARTMENT", "PRICE", "QUANTITY"],
        // }); 
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(products);
        var itemIds = [];
        for (let i = 0; i < products.length; i++) {
            itemIds.push(products[i].item_id);
        }
//ends forloop the goes through the index of products
    //    table.push(
    //        [item_id,product_name,department_name,price.toFixed(2),stock]
    //    )
        
        
        
        customerOptions(itemIds);
//calling the customerOptions function which prompts the customer with ID selection and quanity option.
    });
}
//ends displayProducts function


// function which prompts the customer to select Item Id and quanity 
function customerOptions(id) {
    
console.log(id);
    inquirer
        .prompt([{
            name: "idSelect",
            type: "number",
            message: "What is the ID of the item you want to purchase?",
            validate: function (value) {
                if (id.includes(value)) {
                    return true;
                }
                return "That is a invalid selection";
            }
        },
        {
            name: "quantity",
            type: "number",
            message: "How many units of would you like to buy?",
            validate: function (value) {
                if (isNaN(value) === false && value > 0) {
                    return true;
                }
                return "That is a invalid selection";
                }
            }]).then(function (order) {
                console.log(order);
                        
            })
}//ends customerOptions function
                
                
displayProducts();


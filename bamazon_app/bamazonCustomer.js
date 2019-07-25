/*

*/

var fs = require("fs");
var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "@Dolphin080",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  startPage();
});
function startPage() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log(res);
    //   connection.end(); hmmm what does this line do?
    userInquirer();
  });
}

function userInquirer() {
  // userInquirer()//this funtion probalbly deosnt/shouldnt go here
  inquirer
    .prompt([
      {
        type: "input",
        message: "Would you like to buy an item? To do so just put the id of the item here!",
        name: "id"
      },
    ])
    .then(function (answer) {
      inquirer
        .prompt([
          {
            type: "input",
            message: "how many units would you like to buy? (enter a number)",
            name: "quantity"
          },
        ]).then(function (user) {
          if (isNaN(user.quantity)) {
            console.log("please enter an integer");
          }
          else {
            function selector() {
              var id = parseInt(answer.id);
              var quantity = parseInt(user.quantity);
              connection.query("SELECT * FROM products WHERE id = " + id, function (err, res) {
                if (err) {
                  throw err
                }
                else if (user.quantity > res[0].stock || res[0].stock < 1) {
                  console.log("can't make purchase, not enough in inventory")
                }
                else {
                  console.log("You have chosen the item with id " + id);
                  // console.log(res);
                  var initialStock = parseInt(res[0].stock);
                  var finalStock = initialStock - quantity;
                  console.log(finalStock);
                  //   connection.end(); hmmm what does this line do?
                  updater(id, finalStock);
                }
              });
            }
            selector();
          }
        })
    });
}
function updater(id, finalStock) {
  var sql = "UPDATE products SET stock = " + finalStock + " WHERE id = " + id;

  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " purchase succesful!");
    userInquirer();
  });
};





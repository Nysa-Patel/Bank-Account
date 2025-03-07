//Name: Nysa Patel
//
//Class: 1A CIS Intro to Java
//Date: 02/07/25


//assigning variables
let bankNum = '5467';

//for the buttons and reassigning the value of the inputs
let newplace, newamount, button;
let newplacein, newamountin;

//arrays: one for where the transactions were and the other is how much was spent
let pastTransactions = ["Apple Store", "Taco Bell", "Chick-fil-a", "Target", "Best Buy", "Hollister", "Amazon", "Doordash", "Hair Salon", "Airport Ticket to Maldives"];
let pastAmounts = [997, 23, 14.99, 64.38, 400.97, 84.26, 11, 32.56, 40, 1567];

function setup() {
  createCanvas(windowHeight, windowWidth);
  prompt("Enter bank account number");
  
  //first input box
  newplace = createInput();
  newplace.position(100,530);
  
  //second input box
  newamount = createInput();
  newamount.position(100,590);
  
  //submit button
  button = createButton("Submit");
  button.position(250,590);
  
}

function draw() {
  background(220);
  
  //checks if password is correct
if (bankNum == '5467') {
    text("Approved", 100, 100)
  }
  
  //List of the past transactions and amount
  text("Past Transactions: ", 100, 150);
  for (let i= 0; i < pastTransactions.length; i++) {
    text(pastTransactions[i] + "- $" + pastAmounts[i] + " spent", 100, 180 + i * 30);
  }

  //previous
  text("Previous Transaction: ", 300, 150);
  
  //calls to add function
  Add();
  
  //displays the user inputs
  text(newplacein + "- $" + newamountin + " spent", 300, 200)
  
}

function Add() {
  //calculates total of the past transactions
  let sum = 0;
  i= 0;
  while(i< pastAmounts.length) {
    sum+=pastAmounts[i];
    i++;
  }
  text("Total: $" + sum, 100, 470);
  
  text("Last place a transaction was made: ", 100, 520);
  text("Amount spent at that place: ", 100, 580);
  
  //reassignes the values that the user put in
  newplacein = newplace.value();
  newamountin = newamount.value();


}
//Deposite some money
//Detemini the number of lines to bet on
//Collect a bet amount
//Spin the slop machine
//Check if the user won
//Give the user their winnings
//Play agian


const prompt = require("prompt-sync")(); // Anables the us to access a package tha allows us collect the user input.

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: "); //Ask the user to enter a deposit amount and then storing it in the variable strin depositAmount.
        const numberdepositAmount = parseFloat(depositAmount); //converts the string variable depositAmount to a float variable
        if (isNaN(numberdepositAmount) || numberdepositAmount <= 0) {
            console.log("Invalid deposit amount, try again!"); // Checks if the string variable numberdepositAmount is not a nunber or is less than 0. If the it's either of the above, it returns message "Invalid deposit amount, try agian"

        } else {
            return numberdepositAmount; // The while loop allow us to ever loop the whole functions untill a valid positive float number is entered
        }
    }
};

const depositAmount = deposit(); // calls the function and assigns it a variable name depositAmount.
console.log(depositAmount); //prints the variable

//Deposite some money
//Detemine the number of lines to bet on
//Collect a bet amount
//Spin the slot machine
//Check if the user won
//Give the user their winnings
//Play agian


//Deposite some money
const prompt = require("prompt-sync")(); // Anables the us to access a package tha allows us collect the user input.

const ROWS = 3;
const COLS = 3;

//Defining the symbols using objects
const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}
//Definging the values of the symbols
const SYMBOLS_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}

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

//Detemine the number of lines to bet on

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on 1-3: "); //Ask the user to enter the number of lines to bet on and then storing it in the variable string numberOfLine.
        const numberOfLines = parseFloat(lines); //converts the string variable numberOfLines to a float variable
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, try again!"); // Checks if the string variable numberdepositAmount is not a nunber or is less than 0 or is greater than 3. If the it's neither of the above, it returns message "Invalid number of lines, try agian"
        } else {
            return numberOfLines; // The while loop allow us to ever loop the whole functions untill a valid the value is a number between 1 and 3. float number is entered
        }
    }
};

//Collect a bet amount
const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: "); //Ask the user to enter the amount to bet per line storing it in the variable string bet.
        const numberBet = parseFloat(bet); //converts the string variable numberBet to a float variable
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet, try again!"); // Checks if the string variable numberBet is not a nunber or is less than 0 or is balance is divisible by the input number of line. If the it's neither of the above, else it returns message "Invalid number of lines, try agian"
        } else {
            return numberBet; // The while loop allows us to loop over the whole functions untill all the above criteria are met. float number is entered
        }
    }
};

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [];
    for (let i = 0; i < COLS; i++) {
        reels.push([])
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
};

const transpose = (reels) => {
    const rows = [];

    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i])
        }
    }

    return rows;
};

const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for (const [i, symbol] of row.entries()) {
            rowString += symbol
            if (i != row.length - 1) {
                rowString += " | "
            }
        }

        console.log(rowString);
    }
};

const getWinnings = (rows, bet, lines) => {
    let winnings = 0;

    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols) {
            if (symbol != symbols[0]) {
                allSame = false;
                break;
            }
        }

        if (allSame) {
            winnings += bet * SYMBOLS_VALUES[symbols[0]]
        }
    }

    return winnings;
};

let balance = deposit(); // the let allows us to adjust the value, giving us a chance to change what it is stroring future.
//const numberBet = getBet();
//const depositAmount = deposit(); // calls the function and assigns it a variable name depositAmount.
//console.log(depositAmount); //prints the variable

const numberOfLines = getNumberOfLines(); //call the function and assing it a variable name nuberOfLines
//console.log(numberOfLines) //prints the variabe
const bet = getBet(balance, numberOfLines);// calls the functiona and assing it avariable name bet
const reels = spin();
const rows = transpose(reels);
console.log(reels);
console.log(rows);
printRows(rows);
const winnings = getWinnings(rows, bet, numberOfLines);
console.log("You won, $" + winnings.toString());
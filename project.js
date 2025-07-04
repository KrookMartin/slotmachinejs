// 1. Deposit some money - done
// 2. Determine number of lines on bet - done
// 3. Collect a bet amount - done
// 4. Spinn the machine
// 5. Check if user won 
// 6. Give user thier winnings 
// 7. Play again 

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const SYMBOLS_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}


const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);
        console.log(depositAmount) 

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid deposit amount, try again.");
        } else {
            return numberDepositAmount;
        }
    }    
};

const getNumberOfLine = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);
        console.log(numberOfLines) 

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid number of lines, try again");
        } else {
            return numberOfLines;
        }
    }
}

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter total bet per line: ");
        const numberBet = parseFloat(bet);
        console.log(numberBet) 

         if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines){
            console.log("Invalid bet, try again");
        } else {
            return numberBet;
        }
    }
};
const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for (let i = 0; i < count; i++){
            symbols.push(symbol);

        }
    }
    const reels = [];
    for (let i = 0; i < COLS; i++){
        const reelSymbols = [...symbols];
        reels.push([]);
        for (let j = 0; j < ROWS; j++) {
            const randomIdex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIdex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIdex, 1);
        }
    }
    return reels;
};

const transpose = (reels) => {
    const rows = []

    for (let i = 0; i < ROWS; i++){
        rows.push([]);
        for(let j = 0; j < COLS; j++){
            rows[i].push(reels[j][i]);
        }
    }
    return rows; 
}

const printRows = (rows) => {
    for (const row of rows){
        let rowString ="";
        for (const [i , symbol] of row.entries()){
            rowString += symbol 
            if(i != row.length -1){
                rowString += " | "
            }
        }
        console.log(rowString);
    }
}

let  balance = deposit();
const numberOfLines = getNumberOfLine();
const bet = getBet(balance, numberOfLines);
const reels = spin();
const rows = transpose(reels);
printRows(rows);
//console.log(reels);
//console.log(rows);
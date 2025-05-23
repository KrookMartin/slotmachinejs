// 1. Deposit some money 
// 2. Determine number of lines on bet 
// 3. Collect a bet amount 
// 4. Spinn the machine
// 5. Check if user won 
// 6. Give user thier winnings 
// 7. Play again 

const prompt = require("prompt-sync")();

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

const getBet = (balance) => {
    while (true) {
        const bet = prompt("Enter total bet: ");
        const numberBet = parseFloat(bet);
        console.log(depositAmount) 

         if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid number of lines, try again");
        } else {
            return numberOfLines;
        }
    }
}
let  balance = deposit();
const numberOfLines = getNumberOfLine();
 

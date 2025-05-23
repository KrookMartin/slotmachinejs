// 1. Deposit some money 
// 2. Determine number of lines on bet 
// 3. Collect a bet amount 
// 4. Spinn the machine
// 5. Check if user won 
// 6. Give user thier winnings 
// 7. Play again 

const prompt = require("prompt-sync")();

const deposit = () => {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);
    console.log(depositAmount) 

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
        console.log("Invalid deposit amount, try again.");

    }; 
};

deposit();
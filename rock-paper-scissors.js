"use strict";
// Create function to get the computer's choice
// Randomly returns rock, paper or scissors.
function getComputerChoice() {
    let computerChoice;
    computerChoice = Math.floor(Math.random() * 3) + 1;
    
    if (computerChoice === 1) {
        return "rock";
    }
    else if (computerChoice === 2) {
        return "paper";
    }
    else if (computerChoice === 3) {
        return "scissors";
    }
}

console.log(getComputerChoice());
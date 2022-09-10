/*
- rock beat scissors
- paper beat rock
- scissors beat paper
*/


// Declare the user and computer variables choices
const playerSelection = prompt("Rock, paper or scissors? Write down your answer:");
const computerSelection = getComputerChoice();
console.log("My choice: " + playerSelection);

// Create a function to generate a random choice 
function getComputerChoice() {
    let random =  Math.floor(Math.random() * (4 - 1) + 1);
    if (random === 1) {
        return "rock";
    } else if (random === 2) {
        return "paper";
    } else {
        return "scissors";
    }
};

console.log("Computer choice: " + computerSelection);

//Function to declare the winner
function round(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You loose! Paper beats Rock!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return `You win! Paper beats Rock!`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return `You loose! Scissors beats paper!`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `You win! Scissors beats Paper!`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return `You loose! Rock beats Scissors!`;
    } else {
        return `It's a tie!`;
    }
};

console.log(round(playerSelection, computerSelection));

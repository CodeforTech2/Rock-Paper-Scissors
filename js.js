/*
- rock beat scissors
- paper beat rock
- scissors beat paper
*/
console.log("test");

// Declare the user and computer variables choices
const playerSelection = "rock";//prompt("Rock, paper or scissors? Write down your answer:");
const computerSelection = "paper"; //getComputerChoice();

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

console.log(computerSelection);

//Function to declare the winner
function round(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return `You win! Paper beats Rock`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `You win! Scissors beats Paper`;
    } else {
        return `It's a tie!`;
    }
};

console.log(round(playerSelection, computerSelection));

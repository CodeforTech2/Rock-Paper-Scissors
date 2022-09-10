/*
- rock beat scissors
- paper beat rock
- scissors beat paper
*/

// Declare the user and computer variables choices
const playerSelection = "rock" //prompt("Rock, paper or scissors? Write down your answer:").toLowerCase();
const computerSelection = getComputerChoice();
console.log("My choice: " + playerSelection);


// Create a function to generate a random computer choice 
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
let playerScore = 0;
let computerScore = 0;
    
//Function to declare the winner
function round(playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return "You win! Rock beats Scissors!"
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        computerScore++;
        return "You loose! Paper beats Rock!";
    }  else {
        return `It's a tie!`;
    }
};
            
console.log(round(playerSelection, computerSelection), playerScore, computerScore);

//Function that play 5 rounds and keeps score and reports winners
function game() {
    for (let i = 0; i < 5; i++) {
        //round(playerSelection, computerSelection);
        console.log(computerSelection);
    }
    console.log(playerScore, computerScore);
        if (playerScore === 3) {
            console.log("Player won!");
        } else if (computerScore === 3) {
            console.log("Computer wins!");
        }
    //}
};                      
        
console.log(game());
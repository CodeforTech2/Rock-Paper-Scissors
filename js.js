// Create a function to generate a random computer choice 
function getComputerChoice() {
    let random =  Math.floor(Math.random() * 3);
    if (random === 0) {
        return "rock";
    } else if (random === 1) {
        return "paper";
    } else {
        return "scissors";
    }
};

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
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        computerScore++;
        return `You loose! ${computerSelection} beats ${playerSelection}!`;
    }  else {
        return `It's a tie!`;
    }
};

//Function that play 5 rounds and keeps score and reports winners
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = "rock" //prompt("Rock, paper or scissors? Write down your answer:");
        let computerSelection = getComputerChoice();
        round();
        console.log(i + 1, `Player: ${playerSelection} - Computer: ${computerSelection}`);
        console.log( round(playerSelection, computerSelection), playerScore, computerScore);
    }
    //console.log(playerScore, computerScore);
        if (playerScore > computerScore) {
            console.log(`Player win with: ${playerScore}-${computerScore}`);
        } else if (computerScore > playerScore) {
            console.log(`Computer win with: ${computerScore}-${playerScore}!`);
        } else {
            console.log("It's a tie!");
        }
    //}
};                      

console.log(game());
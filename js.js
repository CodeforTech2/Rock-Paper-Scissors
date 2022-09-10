/*
- rock beat scissors
- paper beat rock
- scissors beat paper
*/
console.log("test");

// Declare the user and computer variables choices
const playerSelection = "rock";
const computerSelection = getComputerChoice();

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


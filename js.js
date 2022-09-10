/*
- rock beat scissors
- paper beat rock
- scissors beat paper
*/
console.log("test");

// Declare the user and computer variables choices
const playerSelection = "rock";
const computerSelection = getComputerChoice();

function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min) + min;
};
console.log(getComputerChoice(1, 4));

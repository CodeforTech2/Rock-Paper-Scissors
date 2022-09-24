const disp = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const playerSel = document.querySelector('#playerSelection');
const computerSel = document.querySelector('#computerSelection');

let playerScore = 0;    
let computerScore = 0;
let count = 0; //count the number of games played;


// Generate a random choice from computer rps
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
//Function that end game and announce the winner and the final score
function endGame() {
    if (playerScore > computerScore) {
        console.log(`Player win with: ${playerScore}-${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`Computer win with: ${computerScore}-${playerScore}!`);
    } else {
        console.log("It's a tie!");
    }
};

// buttons.onclick = function () {
//     // count++;
//     console.log(buttons[0]);
//     // disp.innerHTML = count;
// };

buttons.forEach(btn => btn.addEventListener('click', () => {
    count++;
    console.log(count);
    disp.innerHTML = count;
    function playRound(playerSelection, computerSelection) {
        if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            playerScore++;
            player.innerHTML = playerScore;
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        } else if (
            (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")
        ) {
            computerScore++;
            computer.innerHTML = computerScore;
            return `You loose! ${computerSelection} beats ${playerSelection}!`;
        }  else {
            return `It's a tie!`;
        }
    };

    function game() {
        if (count <= 5) {
            let playerSelection = btn.id;
            let computerSelection = getComputerChoice();
            playRound();
            console.log(`Player: ${playerSelection} - Computer: ${computerSelection}`);
            console.log( playRound(playerSelection, computerSelection), playerScore, computerScore);
        };        
    };
    

        endGame();//ceva nu merge bine la functia asta, nu imi arata rezultatul final cu conditia asta if count == x
    
    console.log(game());
}));


/*let count = 0;
const btn = document.querySelector('#btn');
const disp = document.querySelector('#display');

// btn.onclick = function () {
//     count++;
//     disp.innerHTML = count;
// }
btn.addEventListener('click', () => {
    count++;
    // disp.innerHTML = count;
})*/

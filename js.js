const disp = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const playerSel = document.querySelector('#playerSelection');
const computerSel = document.querySelector('#computerSelection');
const finalScore = document.querySelector('#final-score');
const rounds = document.querySelector('.rounds');
const para = document.createElement('p');
const restart = document.createElement('button');

para.className = "roundOutcome"
// function insertAfter(newNode, existingNode) {
//     existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
// };
// insertAfter(para, rounds.lastElementChild);

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

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        player.innerHTML = playerScore;
        para.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
        rounds.appendChild(para);
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        computerScore++;
        computer.innerHTML = computerScore;
        para.textContent = `You loose! ${computerSelection} beats ${playerSelection}!`;
        rounds.appendChild(para);
        return `You loose! ${computerSelection} beats ${playerSelection}!`;
    }  else {
        para.textContent = "It's a tie!";
        rounds.appendChild(para);
        return `It's a tie! `;
    }
};

//Function that end game and announce the winner and the final score
function endGame() {
    if (count === 5) {
        document.querySelector('#rock').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissors').disabled = true;
        
        if (playerScore > computerScore) {
            console.log(`Player win with: ${playerScore}-${computerScore}`);
            finalScore.innerHTML = `Player win with: ${playerScore} - ${computerScore}`;
        } else if (computerScore > playerScore) {
            console.log(`Computer win with: ${computerScore} - ${playerScore}!`);
            finalScore.innerHTML = `Computer win with: ${computerScore}-${playerScore}!`;
        } else {
            console.log("It's a tie!");
            finalScore.innerHTML = `It's a tie: ${playerScore} - ${computerScore}`;
        }
        //create a restart button with event  to start over again
        restart.textContent = "Let's try again!"
        restart.className = "restart-btn"
        rounds.appendChild(restart);
        restart.addEventListener('click', function(){
            window.location.reload();
          });
        para.textContent = '';
    }
};

buttons.forEach(btn => btn.addEventListener('click', () => {
    count++;
    disp.innerHTML = count;
   
    playRound(playerSelection, computerSelection)

    function game() {
        if (count <= 5) {
            let playerSelection = btn.id;
            let computerSelection = getComputerChoice();
            playRound();
            playerSel.innerHTML = playerSelection;
            computerSel.innerHTML = computerSelection;
            console.log(`Player: ${playerSelection} - Computer: ${computerSelection}`);
            console.log( playRound(playerSelection, computerSelection), playerScore, computerScore);
        };
        endGame();
    };
    console.log(game());
}));


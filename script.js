let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let round = 0;
let winner;

const logMessage = document.querySelector("#logmessage");
const pRound = document.querySelector("#round");
const pPlayerScore = document.querySelector("#pc");
const pComputerScore = document.querySelector("#cc");
const btn = document.querySelectorAll("button");
const divStart = document.querySelector("#divStart");

btn.forEach((button) => {
        button.addEventListener("click", () => {
            playRound(button.value,computerPlay());
            pRound.textContent = ++round;
            if (round === 5) {
                btn.forEach((button) => button.disabled = true);  //need to disable hover as well
                winGame(playerScore, computerScore);
                startRound();
            }            
        });
});

function startRound() {
    divStart.style.display = "block";
    btn.forEach((button) => button.disabled = true);
    divStart.addEventListener("click", () => {
    pPlayerScore.textContent = playerScore = 0;
        pComputerScore.textContent = computerScore = 0;
        pRound.textContent = round = 0;
        btn.forEach((button) => button.disabled = false);
        divStart.style.display = "none"
        
        logMessage.textContent = "";
    });

    
}

function computerPlay() {
    let computerChoice = ["Scissors", "Rock", "Paper" ];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];   
}

function playRound(playerSelection, computerSelection) {
    let message = "";
    if (playerSelection === computerSelection) {
        message = "Even-Steven!";
        logMessage.textContent = message;
    } else if (
        ((playerSelection === "Rock") && (computerSelection === "Scissors")) ||
        ((playerSelection === "Paper") && (computerSelection === "Rock")) ||
        ((playerSelection === "Scissors") && (computerSelection === "Paper"))
    ) { 
        pPlayerScore.textContent = ++playerScore;
        message = `You won! ${playerSelection} beats ${computerSelection}.`;
        logMessage.textContent = message;
    } else {
        message = `You lost! ${playerSelection} doesn't beat ${computerSelection}.`;
        pComputerScore.textContent = ++computerScore;
        logMessage.textContent = message;
    }            
}

function winGame(playerScore, computerScore) {
    if (playerScore == computerScore) winner = " You should try again!";
    else if (playerScore > computerScore) winner = " You won the game!";
    else winner = " You lost this time, try again!"
    logMessage.textContent = "GAME OVER!" + winner;
}


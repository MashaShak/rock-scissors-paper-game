let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let round = 0;
let winner;

const logMessage = document.querySelector("#logmessage");
const pRound = document.querySelector("#round");
const pPlayer = document.querySelector("#pc");
const pComputer = document.querySelector("#cc");
const btn = document.querySelectorAll("button");
  

btn.forEach((button) => {
        button.addEventListener("click", () => {
            
            playRound(button.value,computerPlay());
            pRound.textContent = ++round;
            if (round == 5) {
                game(playerScore, computerScore);
                btn.forEach((button) => {
                    button.disabled = true
                    //need to disable hover as well
                });

                round = 0;
                startRound();
                }
        });
});




function computerPlay() {
    let computerChoice = ["Scissors", "Rock", "Paper" ];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];   
}

function playRound(playerSelection, computerSelection) {
    let message = "";
    if (playerSelection === computerSelection) {
        message = "Wow, Even-Steven! Please play again!";
        logMessage.textContent = message;
    } else if (
        ((playerSelection === "Rock") && (computerSelection === "Scissors")) ||
        ((playerSelection === "Paper") && (computerSelection === "Rock")) ||
        ((playerSelection === "Scissors") && (computerSelection === "Paper"))
    ) { 
        pPlayer.textContent = ++playerScore;
        message = `You won! ${playerSelection} beats ${computerSelection}.`;
        logMessage.textContent = message;
    } else {
        message = `You lost! ${playerSelection} doesn't beat ${computerSelection}.`;
        pComputer.textContent = ++computerScore;
        logMessage.textContent = message;
    }            
}

function game(playerScore, computerScore) {
    if (playerScore == computerScore) winner = " You should try again!";
    else if (playerScore > computerScore) winner = " You won the game!";
    else winner = " You lost!"
    logMessage.textContent = "GAME OVER!" + winner;
}

function startRound() {
    const btnStart = document.createElement("button");
    btnStart.classList.add("btnStart");
    btnStart.textContent = "Play again?";
    const divLog = document.querySelector("#logmessage");
    divLog.appendChild(btnStart);

    btnStart.addEventListener("click", () => {
        playerScore = 0;
        computerScore = 0;


    });


}
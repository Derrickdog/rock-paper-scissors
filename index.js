let playerScore = 0;
let computerScore = 0;

// randomly return Rock Paper or Scissors
function computerPlay(){
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0)
        return "rock";
    else if(choice == 1)
        return "paper";
    else
        return "scissors";
}

// play single round
function playRound(playerSelection, computerSelection){
    document.querySelector("#winner").textContent = "";
    updateImages(playerSelection, computerSelection);
    let message = "";

    if(playerSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        message = "You Lose! Paper beats Rock";
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++;
        message = "You Win! Rock beats Scissors";
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
        message = "You Win! Paper beats Rock";
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
        message = "You Lose! Scissors beats Paper";
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
        message = "You Lose! Rock beats Scissors";
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++;
        message = "You Win! Scissors beats Paper";
    }
    else{
        message = "Draw";
    }
    updateScores();
    return message;
}

function checkWin(){
    return playerScore === 5 || computerScore === 5;
}

function updateScores(){
    const playerLabel = document.querySelector("#playerScore");
    const computerLabel = document.querySelector("#computerScore");
    playerLabel.textContent = `Player: ${playerScore}`;
    computerLabel.textContent = `Computer: ${computerScore}`;
}

function updateImages(playerSelection, computerSelection){
    const playerImage = document.querySelector("#playerChoice");
    const computerImage = document.querySelector("#computerChoice");

    // update player image
    if(playerSelection == "rock"){
        playerImage.textContent = "🪨";
    }
    else if(playerSelection == "paper"){
        playerImage.textContent = "📄";
    }
    else{
        playerImage.textContent = "✂️";
    }

    // update computer image
    if(computerSelection == "rock"){
        computerImage.textContent = "🪨";
    }
    else if(computerSelection == "paper"){
        computerImage.textContent = "📄";
    }
    else{
        computerImage.textContent = "✂️";
    }
}

// play 5 rounds for a game
function game(){
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Choose Rock, Paper, or Scissors");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if(result.charAt(4) == "W")
            playerWins++;
        else if(result.charAt(4) == "L")
            computerWins++;
    }
    if(playerWins > computerWins)
        console.log("You Win!");
    else if(computerWins > playerWins)
        console.log("You Lose!");
    else
        console.log("Draw!");
}

// event listener
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const results = document.querySelector('#results');
        results.textContent = playRound(button.id, computerPlay());
        if(checkWin()){
            const winner = document.querySelector("#winner");
            if(playerScore >= 5){
                winner.textContent = "YOU WIN!!";
            }
            else{
                winner.textContent = "COMPUTER WINS!!";
            }
            playerScore = 0;
            computerScore = 0;
        }
    });
});

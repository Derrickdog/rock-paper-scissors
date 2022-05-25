//game();

// randomly return Rock Paper or Scissors
function computerPlay(){
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0)
        return "Rock";
    else if(choice == 1)
        return "Paper";
    else
        return "Scissors";
}

// play single round
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection == "rock" && computerSelection == "paper")
        return "You Lose! Paper beats Rock";
    else if(playerSelection == "rock" && computerSelection == "scissors")
        return "You Win! Rock beats Scissors";
    else if(playerSelection == "paper" && computerSelection == "rock")
        return "You Win! Paper beats Rock";
    else if(playerSelection == "paper" && computerSelection == "scissors")
        return "You Lose! Scissors beats Paper";
    else if(playerSelection == "scissors" && computerSelection == "rock")
        return "You Lose! Rock beats Scissors";
    else if(playerSelection == "scissors" && computerSelection == "paper")
        return "You Win! Scissors beats Paper";
    else
        return "Draw";
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

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const results = document.querySelector('#results');
        results.textContent = playRound(button.id, computerPlay());
    });
});


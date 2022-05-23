const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

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

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    const randomNum = (Math.floor(Math.random()*choices.length));
    return choices[randomNum];
    
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return"Tie. Play Again";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        return "You win. Rock beats scissors";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
        return "You win. Scissors beats paper";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "You win. Paper beats rock";
    } else {
        return "You lose. Play again.";
    }
    
    

}

const computerSelection = computerPlay();
const playerSelection  = "paper"
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));

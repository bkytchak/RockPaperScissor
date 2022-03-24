let playerScore = 0
let computerScore = 0

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    const randomNum = (Math.floor(Math.random()*choices.length));
    return choices[randomNum];
    
}

//Plays a single round of the game
function playRound (playerSelection, computerSelection) {
    let result = " "
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        result =  ("Tie. Play again.")
    } else if ((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") ||
            (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper")  ||
            (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock")) {

            playerScore++
            result = ("You win. " + playerSelection + " beats " + computerSelection + ".")
    } else {
        computerScore++
        result = ("You lose. " + computerSelection + " beats " + playerSelection + ".")
    }
return result
}

function game() {
    let roundResult = ""
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
        console.log("your score = " + playerScore);
        console.log("Computer's score = " + computerScore);
    } 
    if (playerScore < computerScore){
        roundResult =  "Loser"
    } else if (playerScore > computerScore){
        roundResult = "You win"
    } else {
        roundResult = "Tie. Refresh page to play again."
    }
    return roundResult
}

console.log(game())

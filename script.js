function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    const randomNum = (Math.floor(Math.random()*choices.length));
    return choices[randomNum];
}

console.log(computerPlay());

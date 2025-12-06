//create choices ie Rock Paper Scissors
const choices = ["Rock", "Paper", "Scissors"];
//create prompt for user choice/restrict to only the three answers
function user () {

    while (true) {

        let userChoice = prompt("Pick one: Rock, Paper, or Scissors!");

        if (userChoice === null) {
            alert("Game Cancelled!");
            return null;
        }

        let formattedChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();

        if (choices.includes(formattedChoice)) {
            return formattedChoice;
        }

        alert(`"${userChoice}" is not a valid choice. Please choose one of: ${choices.join(', ')}.`);
    }
}
userAnswer = user()
//create random choice
const randomIndex = Math.floor(Math.random() * choices.length);
const randomChoice = choices[randomIndex];
console.log(randomChoice);
//show both user and random answer
let result = "User picked " + userAnswer + " " + "and bot picked " + randomChoice;
alert(result);
//compare the two answers
if (userAnswer === randomChoice) {
    alert("DRAW!");
}   else if (userAnswer === "Rock" && randomChoice === "Scissors" || userAnswer === "Scissors" && randomChoice === "Paper" || userAnswer === "Paper" && randomChoice === "Rock") {
    alert("YOU WIN!");
}   else {
    alert("YOU LOSER!");
}
//ask "play again" or "no"
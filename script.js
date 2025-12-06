const choices = ["Rock", "Paper", "Scissors"];

//////////USER CHOICE FUNCTION//////////
function user () {

    while (true) {

        let userChoice = prompt("Pick one: Rock, Paper, or Scissors!");

        if (userChoice === null) {
            alert("Game Cancelled!");
            return;
        }

        let formattedChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();

        if (choices.includes(formattedChoice)) {
            return formattedChoice;
        }

        alert(`"${userChoice}" is not a valid choice. Please choose one of: ${choices.join(', ')}.`);
    }
}

//////////ASSIGNING USER CHOICE//////////
userAnswer = user()

//////////CHECK IF USER CANCELLED//////////
/*
if (userAnswer === null) {
    alert("CANCELLING..."); 
    throw new Error("Game Cancelled by User");
}
*/

//////////CREATING RANDOM CHOICE//////////
const randomIndex = Math.floor(Math.random() * choices.length);
const randomChoice = choices[randomIndex];

//////////PRESENT USER AND RANDOM CHOICE//////////
let result = "User picked " + userAnswer + " " + "and bot picked " + randomChoice;
alert(result);

//////////COMPARING CHOICES AND OUTPUT WIN/LOSS/DRAW//////////
if (userAnswer === randomChoice) {
    alert("DRAW!");
}   else if (userAnswer === "Rock" && randomChoice === "Scissors" || userAnswer === "Scissors" && randomChoice === "Paper" || userAnswer === "Paper" && randomChoice === "Rock") {
    alert("YOU WIN!");
}   else {
    alert("YOU LOSER!");
}

//ask "play again" or "no"
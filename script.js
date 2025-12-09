//////////DECLARING VARIABLES//////////
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
        if (choices.includes(formattedChoice)) { //allows for case insensitivity
            return formattedChoice; 
        }
        alert(`"${userChoice}" is not a valid choice. Please choose one of: ${choices.join(', ')}.`); //error message for invalid input
    }
}

//////////ASSIGNING USER CHOICE//////////
userAnswer = user()

//////////CREATING RANDOM CHOICE//////////
const randomIndex = Math.floor(Math.random() * choices.length);
const randomChoice = choices[randomIndex]; //bot's random choice

//////////CHECK IF USER CANCELLED ELSE CONTINUE//////////
if (userAnswer === null || userAnswer === undefined) { 
    throw new Error("Game Cancelled by User"); //stops execution if user cancelled
} else {
    let result = "User picked " + userAnswer + " " + "and bot picked " + randomChoice;
    alert(result);  //displays both choices
}

//////////COMPARING CHOICES AND OUTPUT WIN/LOSS/DRAW//////////
if (userAnswer === randomChoice) {
    alert("DRAW!"); //tie condition
}   else if (userAnswer === "Rock" && randomChoice === "Scissors" || userAnswer === "Scissors" && randomChoice === "Paper" || userAnswer === "Paper" && randomChoice === "Rock") {
    alert("YOU WIN!"); //win conditions
}   else {
    alert("YOU LOSER!"); //loss conditions
}

//////////PLAY AGAIN PROMPT//////////
let playAgain = prompt("Do you want to play again?" + " Type 'yes' to play again.");
if (playAgain && playAgain.toLowerCase() === "yes") { //checks for 'yes' input
    location.reload(); //reloads the page to start a new game
} else {
    alert("Thanks for playing!"); //farewell message
}


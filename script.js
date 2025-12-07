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

//////////CREATING RANDOM CHOICE//////////
const randomIndex = Math.floor(Math.random() * choices.length);
const randomChoice = choices[randomIndex];

//////////CHECK IF USER CANCELLED ELSE CONTINUE//////////
if (userAnswer === null || userAnswer === undefined) { 
    throw new Error("Game Cancelled by User");
} else {
    let result = "User picked " + userAnswer + " " + "and bot picked " + randomChoice;
    alert(result);  
}

//////////COMPARING CHOICES AND OUTPUT WIN/LOSS/DRAW//////////
if (userAnswer === randomChoice) {
    alert("DRAW!");
}   else if (userAnswer === "Rock" && randomChoice === "Scissors" || userAnswer === "Scissors" && randomChoice === "Paper" || userAnswer === "Paper" && randomChoice === "Rock") {
    alert("YOU WIN!");
}   else {
    alert("YOU LOSER!");
}

//////////PLAY AGAIN PROMPT//////////
let playAgain = prompt("Do you want to play again?");
if (playAgain && playAgain.toLowerCase() === "yes") {
    location.reload(); //reloads the page to start a new game
} else {
    alert("Thanks for playing!");
}
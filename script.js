const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(choices) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
let computerChoice = getComputerChoice(choices);

function getHumanChoice (choices) {
    while (true) {
        let humanInput = prompt("Enter rock, paper, or scissors:");
        if (humanInput === null) {
            alert("Game cancelled.");
            return;
    }   let formattedInput = humanInput.charAt(0).toUpperCase() + humanInput.slice(1).toLowerCase();
        if (choices.includes(formattedInput.toLowerCase())) {
            return formattedInput;
        } else {
            alert(`"${humanInput}" is not a valid choice. Please choose one of: ${choices.join(', ')}.`);
        }
    }
}
let humanChoice = getHumanChoice(choices);

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice, humanScore, computerScore) {
    alert(`You chose ${humanChoice}, Computer chose ${computerChoice}. `);
    if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        alert("It's a draw!");
    } else if (
        (humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'scissors') ||
        (humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'rock') ||
        (humanChoice.toLowerCase() === 'scissors' && computerChoice.toLowerCase() === 'paper')
    ) {
        humanScore++;
        alert("You win this round!");
    } else {
        computerScore++;
        alert("Computer wins this round!");
    }
}

function playGame (playRound, humanChoice, computerChoice, humanScore, computerScore) {
    while ((humanScore + computerScore) < 5) {
        playRound(humanChoice, computerChoice, humanScore, computerScore);
    }   
}

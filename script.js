/*
function that randomly returns rock paper or scissors
    reference Math.random
    choices do not have to be stored in array
    function name must be "getComputerChoice"
function that takes user input and returns it 
    use prompt method to get user input
    do not have to reprompt if user enters incorrect input
    function name must be "getHumanChoice"
write variables to keep track of player score
    create "humanScore"
    create "computerScore"
    set both variables to 0
function that plays a single round of RPS
    take human and computer choices as arguments
    play a single round
    increment round winner score "winner++"
    log a winner
    function name "playRound"
    define two parameters "humanChoice" and "computerChoice"
    make "humanChoice" case insensitive
    make "you win" "you lose" console.log
function that plays 5 rounds using playRound()
    function playGame
    declare playRound and store variables inside playGame
    play 5 rounds by calling playRound 5 times

*/

            ///creates random choice for computer///

const choices = ["rock", "paper", "scissors"];
function getComputerChoice () {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

            ///gets human choice///

function getHumanChoice () {
    let humanChoice = prompt("Pick one: rock, paper, or scissors!");
    return humanChoice;
}

            ///sets human and computer score to 0///

let humanScore = 0;
let computerScore = 0;

console.log(humanScore);
console.log(computerScore);

            ///compares human vs computer choice and gives point accordingly///

function playRound (humanChoice, computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);
    humanChoice = humanChoice?.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("Draw!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log("You Win!");
    } else {
        computerScore++;
        console.log("You Lose!");
    }
}

            ///assigning getChoice functions to variables then running them in playRound function///

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

            ///
            
function playGame () {
    playRound(humanSelection, computerSelection, humanScore, computerScore);
}

playGame();
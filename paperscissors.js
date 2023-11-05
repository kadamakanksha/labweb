let rock = 'rock';
let scissors = 'scissors';
let paper = 'paper';

// these two variables will be changed to test the conditional
let firstPlayerChoice;
let secondPlayerChoice;

let firstPossibility;
let secondPossibility;
let thirdPossibility;

let fourthPossibility;
let fifthPossibility;
let sixthPossibility;

let seventhPossibility;
// Rock-paper-scissors game

const rock = "rock";
const scissors = "scissors";
const paper = "paper";

// Get the player choices
const firstPlayerChoice = prompt("Player 1, choose rock, scissors, or paper: ");
const secondPlayerChoice = prompt("Player 2, choose rock, scissors, or paper: ");
// Determine the winner
let winner;
if (firstPlayerChoice === rock && secondPlayerChoice === scissors) {
 winner = "Player 1";
} else if (firstPlayerChoice === scissors && secondPlayerChoice === paper) {
 winner = "Player 1";
} else if (firstPlayerChoice === paper && secondPlayerChoice === rock) {
 winner = "Player 1";
} else if (firstPlayerChoice === scissors && secondPlayerChoice === scissors) {
 winner = "Tie";
} else if (firstPlayerChoice === paper && secondPlayerChoice === paper) {
 winner = "Tie";
} else if (firstPlayerChoice === rock && secondPlayerChoice === rock) {
 winner = "Tie";
} else {
 winner = "Invalid move";
}
// Print the result
alert(winner);


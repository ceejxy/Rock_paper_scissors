
// create a variable that returns a random number between 1 and 3
// the computer's choice will depend on the random number
// if the random number is one, the output is Rock
// else if the random number is 2, the output is Paper
// else the output is Scissors
//


let randomNumber = Math.floor(Math.random()* 3) + 1

function getComputerChoice() {
    let computerChoice = Number(randomNumber);
   
    if(computerChoice === 1) {
        console.log('Rock');
    } else if (computerChoice === 2) {
        console.log('Paper');
    } else {
        console.log('Scissors');
    }
}

getComputerChoice();

// create a function named getHumanChoice
// human's choice depends on their input
// prompt the human to input one of the three choices
// if their input is Rock, Paper, or Scissors
// change the users input to all lowercase using toLowerCase method for consistency
// return the human's choice with the first letter capitalized only
// else alert the human that their answer is invalid
// alert human that their answer is not valid


function getHumanChoice() {
    let humanChoice = prompt('Choose your fighter').toLowerCase();

    if (humanChoice.toLowerCase() == 'rock' || humanChoice.toLowerCase() == 'paper' || humanChoice.toLowerCase() == 'scissors') {
        console.log(humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1));
    } else {
        console.log('That is not an option!');
    }
}

console.log(getHumanChoice())
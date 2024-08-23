
// create a variable that returns a random number between 1 and 3
// the computer's choice will depend on the random number
// if the random number is one, the output is Rock
// else if the random number is 2, the output is Paper
// else the output is Scissors
//


let randomNumber = Math.floor(Math.random()* 3) + 1

function getComputerChoice() {
    let computerWeapon = Number(randomNumber);
   
    if(computerWeapon === 1) {
        return 'Rock';
        //console.log(computerWeapon);
    } else if (computerWeapon === 2) {
        return 'Paper';
        //console.log(computerWeapon);
    } else {
        return 'Scissors';
        //console.log(computerWeapon);
    }
}


// create a function named getHumanChoice
// human's choice depends on their input
// prompt the human to input one of the three choices
// if their input is Rock, Paper, or Scissors
// change the users input to all lowercase using toLowerCase method for consistency
// return the human's choice with the first letter capitalized only
// else alert the human that their answer is invalid
// alert human that their answer is not valid


function getHumanChoice() {
    let humanWeapon;

    while (true) {
        humanWeapon = prompt('Choose your fighter').toLowerCase();
        
        if (humanWeapon.toLowerCase() == 'rock' || humanWeapon.toLowerCase() == 'paper' || humanWeapon.toLowerCase() == 'scissors') {
            let answer = humanWeapon.charAt(0).toUpperCase() + humanWeapon.slice(1);
            return answer
            break;
        }
        return 'That is NOT an option!';
    }
}

// create variable to keep track of human score
// create variable to keep track of computer score
// initialize both to 0
// create a function that will take the humans choice and computers choice as arguments
// define two parameters -> humanChoice and computerChoice
// set const variable for human selection = getHumanChoice()
// set const variable for computer choice = getComputerChoice()

function playRound(humanChoice, computerChoice) {
    let computerScore = 0;
    let humanScore = 0;

    console.log(getComputerChoice());
    
    if (humanChoice === 'Rock' && computerChoice === 'Paper') {
        computerScore++;
        console.log('Computer wins!');
        console.log('Computer score is:', computerScore);
    } else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
        computerScore++;
        console.log('Computer wins!');
        console.log('Computer score is:', computerScore);
    } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
        computerScore++;
        console.log('Computer wins!');
        console.log('Computer score is:', computerScore);
    } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
        humanScore++;
        console.log('Human wins!');
        console.log('Human score is:', humanScore);
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
        humanScore++;
        console.log('Human wins!');
        console.log('Human score is:', humanScore);
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
        humanScore++;
        console.log('Human wins!');
        console.log('Human score is:', humanScore);
    } else {
        console.log('DRAW!')
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
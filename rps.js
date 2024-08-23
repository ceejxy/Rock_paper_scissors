
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
        computerWeapon = 'Rock'
        console.log('Computer selects:', computerWeapon);
    } else if (computerWeapon === 2) {
        computerWeapon = 'Paper';
        console.log('Computer selects:', computerWeapon);
    } else {
        computerWeapon = 'Scissors'
        console.log('Computer selects:', computerWeapon);
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
    let humanWeapon;

    while (true) {
        humanWeapon = prompt('Choose your fighter').toLowerCase();
        
        if (humanWeapon.toLowerCase() == 'rock' || humanWeapon.toLowerCase() == 'paper' || humanWeapon.toLowerCase() == 'scissors') {
            let answer = humanWeapon.charAt(0).toUpperCase() + humanWeapon.slice(1);
            console.log('Human selects:', answer);
            break;
        }
        console.log('That is NOT an option!');
    }
}

     
getHumanChoice();


// create variable to keep track of human score
// create variable to keep track of computer score
// initialize both to 0
// create a function that will take the humans choice and computers choice as arguments
// define two parameters -> humanChoice and computerChoice
// set const variable for human selection = getHumanChoice()
// set const variable for computer choice = getComputerChoice()
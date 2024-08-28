
// create a variable that returns a random number between 1 and 3
// the computer's choice will depend on the random number
// if the random number is one, the output is Rock
// else if the random number is 2, the output is Paper
// else the output is Scissors
//



function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()* 3) + 1
    let computerWeapon = Number(randomNumber);
    let choice = ''

    if(computerWeapon === 1) {
        choice = 'Rock';
        return choice
    } else if (computerWeapon === 2) {
        choice = 'Paper';
        return choice
    } else {
        choice = 'Scissors';
        return choice;
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

    while (true) {
        humanWeapon = prompt('Choose your fighter').toLowerCase();
        
        if (humanWeapon === 'rock' || humanWeapon === 'paper' || humanWeapon === 'scissors') {
            humanWeapon = humanWeapon.charAt(0).toUpperCase() + humanWeapon.slice(1);
            return humanWeapon;
        } else {
        alert('That is NOT an option!');
    }
}
}



//console.log(getHumanChoice());



// create variable to keep track of human score
// create variable to keep track of computer score
// initialize both to 0
// create a function that will take the humans choice and computers choice as arguments
// define two parameters -> humanChoice and computerChoice
// set const variable for human selection = getHumanChoice()
// set const variable for computer choice = getComputerChoice()



//console.log(playRound(humanSelection, computerSelection));



function playRound(humanChoice, computerChoice) {


    if (humanChoice === 'Rock' && computerChoice === 'Paper') {
        compScore++;
        return 'Computer wins!';
    }  else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
        compScore++;
        return 'Computer wins!';
    } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
        compScore++;
        return 'Computer wins!';
    } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
        humanScore++;
        return 'Human wins!';
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
        humanScore++;
        return 'Human wins!';
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
        humanScore++;
        return 'Human wins!';
    } else {
        return 'DRAW!'
    }

}      


let humanScore = parseInt(0);
let compScore = parseInt(0);
const computerChoice = getComputerChoice();

function playGame() {

    for (let round = 0; round < 5; round++) {
        let humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log('You selected: ' + humanChoice);
        console.log('Computer selected: ' + computerChoice);
        console.log(playRound(humanChoice, computerChoice));
        console.log('Your score is: ' + humanScore);
        console.log('Computer score is: ' + compScore);
    }

}

playGame();

if (humanScore > compScore) {
    alert('AYY EASY DUB CHAT!'); 
} else {
    alert('OH NAH HE LOST TO AN AI!!!');
}



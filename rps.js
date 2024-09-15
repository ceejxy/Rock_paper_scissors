
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

console.log(getComputerChoice())



// create a function named getHumanChoice
// human's choice depends on their input
// prompt the human to input one of the three choices
// if their input is Rock, Paper, or Scissors
// change the users input to all lowercase using toLowerCase method for consistency
// return the human's choice with the first letter capitalized only
// else alert the human that their answer is invalid
// alert human that their answer is not valid


 /* function getHumanChoice() {

    while (true) {
        humanWeapon = prompt('Choose your fighter').toLowerCase();
        
        if (humanWeapon === 'rock' || humanWeapon === 'paper' || humanWeapon === 'scissors') {
            humanWeapon = humanWeapon.charAt(0).toUpperCase() + humanWeapon.slice(1);
            return humanWeapon;
        } else {
        alert('That is NOT an option!');
    }
}
} */




// create variable to keep track of human score
// create variable to keep track of computer score
// initialize both to 0
// create a function that will take the humans choice and computers choice as arguments
// define two parameters -> humanChoice and computerChoice
// set const variable for human selection = getHumanChoice()
// set const variable for computer choice = getComputerChoice()



//console.log(playRound(humanSelection, computerSelection)); */



let humanChoice = ''

function humanSelection(event) {

    
    if (event.target.id === 'rockButton') {
        humanChoice = 'Rock';
        console.log(humanChoice);
    } else if (event.target.id === 'paperButton') {
        humanChoice = 'Paper';
        console.log(humanChoice);
    } else {
        humanChoice = 'Scissors';
        console.log(humanChoice);
    }
}

const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');

rockButton.addEventListener ('click', humanSelection);
paperButton.addEventListener ('click', humanSelection);
scissorsButton.addEventListener ('click', humanSelection);

let humanScore = parseInt(0);
let compScore = parseInt(0);
computerChoice = getComputerChoice();

function go() {
    if (humanChoice === 'Rock' && computerChoice === 'Paper') {
        compScore++;
        console.log('Computer wins!');
    }  else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
        compScore++;
        console.log('Computer wins!');
    } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
        compScore++;
        console.log('Computer wins!');
    } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
        humanScore++;
        console.log('Human wins!');
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
        humanScore++;
        console.log('Human wins!');
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
        humanScore++;
        console.log('Human wins!');
    } else {
        console.log('DRAW!');
    }
}

const goButton = document.getElementById('goButton');
goButton.addEventListener('click', go);


/*

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
} */




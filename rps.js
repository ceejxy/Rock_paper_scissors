
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
        computerWeapon = 'Rock';
        return computerWeapon 
    } else if (computerWeapon === 2) {
        computerWeapon = 'Paper';
        return computerWeapon
    } else {
        computerWeapon = 'Scissors';
        return computerWeapon;
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






let computerSelection = getComputerChoice();




//console.log(playRound(humanSelection, computerSelection));

newHumanValue = '';
newCompValue = '';

function playGame() {

    
    function playRound(humanChoice, computerChoice) {

        let compScore = 0;
        let humanScore = 0;
        
        console.log(humanSelection);
        console.log(computerSelection);

        if (humanChoice === 'Rock' && computerChoice === 'Paper') {
            compScore++;
            return 'Computer wins!';
        }  else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
            computerScore++;
            return 'Computer wins!';
        } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
            computerScore++;
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
}

let humanScore = parseInt(0);
let compScore = parseInt(0);

for (let i = 0; i <= 5 ; i++) {
    let humanChoice = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanChoice, computerSelection));
    console.log('your score = ' + humanScore);
    console.log("computer's score is " + compScore);
    i++;
}

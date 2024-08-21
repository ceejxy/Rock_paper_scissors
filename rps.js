
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
// create a variable that returns a random number between 1 and 3
// the computer's choice will depend on the random number
// if the random number is one, the output is Rock
// else if the random number is 2, the output is Paper
// else the output is Scissors



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

// create variable to keep track of human score
// create variable to keep track of computer score
// initialize both to 0
// create a function that will take the humans choice and computers choice as arguments
// define two parameters -> humanChoice and computerChoice
// set const variable for human selection = getHumanChoice()
// set const variable for computer choice = getComputerChoice()



function playRound(humanChoice, computerChoice) {

    if (humanChoice === 'Rock' && computerChoice === 'Paper') {
        //compScore++;
        console.log('Computer wins!');
    }  else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
        //compScore++;
        console.log('Computer wins!');
    } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
        //compScore++;
        console.log('Computer wins!');
    } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
        //humanScore++;
        console.log('Human wins!');
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
        //humanScore++
        console.log('Human wins!');
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
        //humanScore++;
        console.log('Human wins!');
    } else {
        console.log('DRAW');
    }
}    


const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', e => {
    const isButton = e.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }

    humanChoice = (e.target.textContent);
    computerChoice = getComputerChoice();
    console.log('You chose ' + humanChoice + ' and the Computer chose ' + computerChoice);

    playRound(humanChoice, computerChoice);
})






/*
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

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

let humanScore = parseInt(0);
let compScore = parseInt(0);

function playRound(humanChoice, computerChoice) {


    if (humanChoice === 'Rock' && computerChoice === 'Paper') {
        compScore++;
       // console.log('Computer wins!');
    }  else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
        compScore++;
       // console.log('Computer wins!');
    } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
        compScore++;
       // console.log('Computer wins!');
    } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
        humanScore++;
        //console.log('Human wins!');
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
        humanScore++
        //console.log('Human wins!');
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
        humanScore++;
        //console.log('Human wins!');
    } else {
        //console.log('DRAW');
    }

    if (humanScore === 5) {
        alert('You win!');
        humanScore = 0;
        compScore = 0;
    } else if (compScore === 5) {
        alert('Computer wins!');
        compScore = 0;
        humanScore = 0;
    }

}    


const results = document.createElement('div');
const score1 = document.createElement('div');
const score2 = document.createElement('div');

document.body.appendChild(results);
results.appendChild(score1);
score1.textContent = 'Your score:';

results.appendChild(score2);
score2.textContent = 'Computer score:';



const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', e => {

    const isButton = e.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    
    humanChoice = (e.target.textContent);
    computerChoice = getComputerChoice();

   // console.log('You chose ' + humanChoice + ' and the Computer chose ' + computerChoice);

    playRound(humanChoice, computerChoice);

    const yourScore = document.createElement('p');
    score1.appendChild(yourScore);
    yourScore.textContent = humanScore;

    const puteScore = document.createElement('p');
    score2.appendChild(puteScore);
    puteScore.textContent = compScore;

});





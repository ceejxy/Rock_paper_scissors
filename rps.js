// create function to get computers choice 

let choices = ['Rock', 'Paper', 'Scissors'] 

let computerChoice = () => {
    let number = Math.floor(Math.random()* 3)
    let compChoice;
    if (choices[number] === 'Rock') {
        compChoice = 'Rock'
    } else if (choices[number] === 'Paper') {
        compChoice = 'Paper'
    } else {
        compChoice = 'Scissors'
    }
    return compChoice;
}

// create function for the rules of the game 

const result = document.querySelector('#result')
let humanScore = 0;
let compScore = 0;


function playRound(humanChoice, compChoice) {
    if (humanChoice === 'Rock' && compChoice === 'Paper') {
        compScore++
        result.innerText = 'You selected: Rock \n Computer selected: Paper \n Computer wins!';
    } else if (humanChoice === 'Paper' && compChoice === 'Scissors') {
        compScore++
        result.innerText = 'You selected: Paper \n Computer selected: Scissors \n Computer wins!';
    } else if (humanChoice === 'Scissors' && compChoice === 'Rock') {
        compScore++
        result.innerText = 'You selected: Scissors \n Computer selected: Rock \n Computer wins!';
    } else if (humanChoice === 'Rock' && compChoice === 'Scissors') {
        humanScore++
        result.innerText = 'You selected: Rock \n Computer selected: Scissors \n You win!';
    } else if (humanChoice === 'Paper' && compChoice === 'Rock') {
        humanScore++
        result.innerText = 'You selected: Paper \n Computer selected: Rock \n You win!!';
    } else if (humanChoice === 'Scissors' && compChoice === 'Paper') {
        humanScore++
        result.innerText = 'You selected: Scissors \n Computer selected: Paper \n You win!';
    } else {
        result.innerText = 'DRAW!'
    }
}


// create function to get humans choice depending on which button they click and then runs the playRound function

const wrapper = document.querySelector('#wrapper');
const humanRecord = document.querySelector('#humanRecord')
const compRecord = document.querySelector('#compRecord')


wrapper.addEventListener('click', function(e) {

    humanChoice = e.target.innerText;
    compChoice = computerChoice();
    
    playRound(humanChoice, compChoice);

    humanRecord.innerText = `Your score is: ${humanScore}`;
    compRecord.innerText = `Computer score is: ${compScore}`;

    if (compScore === 5) {
        compScore = 0;
        humanScore = 0;
        alert('Game over! Computer wins!');
    } else if (humanScore === 5) {
        humanScore = 0;
        compScore = 0;
        alert('Game over! You win!')
    }

})
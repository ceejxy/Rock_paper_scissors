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
        result.innerText = 'You selected: Paper \n Computer selected: Rock \n You win!';
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
const finalVerdict = document.createElement('div')
const resetButton = document.querySelector('#reset')


wrapper.addEventListener('click', function(e) {

    humanChoice = e.target.innerText;
    compChoice = computerChoice();
    
    playRound(humanChoice, compChoice);

    humanRecord.innerText = `Your score: ${humanScore}`;
    compRecord.innerText = `Computer score: ${compScore}`;

    if (compScore === 5) {
        compScore = 0;
        humanScore = 0;
        finalVerdict.innerText = 'YOU JUST LOST TO AN AI LOLZ';
        finalVerdict.style.color = 'red'
        document.body.appendChild(finalVerdict)
    } else if (humanScore === 5) {
        humanScore = 0;
        compScore = 0;
        finalVerdict.innerText = 'OH YEA DUB CLUB';
        finalVerdict.style.color = 'green';
        document.body.appendChild(finalVerdict)
    }

    resetButton.addEventListener('click', () => {
        document.body.removeChild(finalVerdict);
        humanScore = 0;
        compScore = 0;
        humanRecord.innerText = `Your score: ${humanScore}`;
        compRecord.innerText = `Computer score: ${compScore}`;
      });
    
})

finalVerdict.style.fontSize = '90px';
finalVerdict.style.textAlign = 'center';
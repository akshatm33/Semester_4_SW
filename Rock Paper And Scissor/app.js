const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const resetButton = document.getElementById('reset');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const tiesDisplay = document.getElementById('ties');

let userChoice;
let computerChoice;
let result;
let wins = 0;
let losses = 0;
let ties = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    if (e.target.id === 'reset') return;
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors';
    }
    if (randomNumber === 3) {
        computerChoice = 'paper';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'It\'s a tie!';
        ties++;
    } else if (
        (computerChoice === 'rock' && userChoice === 'paper') ||
        (computerChoice === 'paper' && userChoice === 'scissors') ||
        (computerChoice === 'scissors' && userChoice === 'rock')
    ) {
        result = 'You win!';
        wins++;
    } else {
        result = 'You lost!';
        losses++;
    }

    resultDisplay.innerHTML = result;
    updateScoreboard();
}

function updateScoreboard() {
    winsDisplay.innerHTML = `Wins: ${wins}`;
    lossesDisplay.innerHTML = `Losses: ${losses}`;
    tiesDisplay.innerHTML = `Ties: ${ties}`;
}

resetButton.addEventListener('click', () => {
    computerChoice = '';
    userChoice = '';
    result = '';
    computerChoiceDisplay.innerHTML = '';
    userChoiceDisplay.innerHTML = '';
    resultDisplay.innerHTML = '';
    wins = 0;
    losses = 0;
    ties = 0;
    updateScoreboard();
});
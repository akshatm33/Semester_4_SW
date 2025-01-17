    const computerChoiceDisplay = document.getElementById('computer-choice')
    const userChoiceDisplay = document.getElementById('user-choice')
    const resultDisplay = document.getElementById('result')
    const possibleChoices = document.querySelectorAll('button')
    const resetButton = document.getElementById('reset'); 
    let userChoice
    let computerChoice
    let result

    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
        if (e.target.id === 'reset') return;
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
        getResult()
    }))

    function generateComputerChoice() {
        const randomNumber = Math.floor(Math.random() * 3) + 1
        
        if (randomNumber === 1) {
            computerChoice = 'rock'
        }
        if (randomNumber === 2) {
            computerChoice = 'scissors'
        }
        if (randomNumber === 3) {
            computerChoice = 'paper'
        }
        computerChoiceDisplay.innerHTML = computerChoice
    }

    function getResult() {
        if (computerChoice === userChoice) {
            result = 'its a tie'
        }
        if (computerChoice === 'rock' && userChoice ==="paper") {
            result = 'you win!'
        }
        if (computerChoice === 'rock' && userChoice ==="scissors") {
            result = 'you lost!'
        }
        if (computerChoice === 'paper' && userChoice ==="scissors") {
            result = 'you win!'
        }
        if (computerChoice === 'paper' && userChoice ==="rock") {
            result = 'you lost!'
        }
        if (computerChoice === 'scissors' && userChoice ==="rock") {
            result = 'you win!'
        }
        if (computerChoice === 'scissors' && userChoice ==="paper") {
            result = 'you lost!'
        }

        resultDisplay.innerHTML = result
    }

    resetButton.addEventListener('click', () => {
        computerChoice = '';
        userChoice = '';
        result = '';
        computerChoiceDisplay.innerHTML = '';
        userChoiceDisplay.innerHTML = '';
        resultDisplay.innerHTML = '';
    });
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats rock.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats paper.';
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter rock, paper, or scissors: ');
        const computerSelection = getComputerChoice();
        console.log(`Player selected ${playerSelection.toLocaleLowerCase()}`);
        console.log(playRound(playerSelection, computerSelection));
    }

}

playGame();

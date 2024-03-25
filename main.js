function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function playGame() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter rock, paper, or scissors: ');
        const computerSelection = getComputerChoice();
        round = playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        if (round.includes('win')) {
            score++;
        }
    }
    console.log(`You won ${score} out of 5 rounds.`);

}

playGame();

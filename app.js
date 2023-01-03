// rock beat scissor
//scissor beat paper
//paper beat rock

/* 
  if computer play rock:
  --if you play paper then you won
  --if you play scissor then you lose
  -- otherwise game equal

  if computer play scissor:
  --if you play rock then you won
  --if you play paper then you lose
  -- otherwise game equal

  if computer play paper:
  --if you play scissor then you won
  --if you play rock then you lose
  -- otherwise game equal

*/
let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissor"]
    let randomInd = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomInd]
    return computerChoice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "Game draw"
    }

    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            computerPoints++;
            return "You Lose! Paper beats Rock"
        }
        else {
            playerPoints++;
            return "You Wonnnnnn! Rock beats Scissor"
        }
    }

    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "scissor") {
            computerPoints++;
            return "You Lose! Scissor beats paper"
        }
        else {
            playerPoints++;
            return "You Wonnnnnn! Paper beats Rock"
        }
    }
    if (playerSelection.toLowerCase() === "scissor") {
        if (computerSelection === "rock") {
            computerPoints++;
            return "You Lose! Rock beats Scissor"
        }
        else {
            playerPoints++;
            return "You Wonnnnnn! Scissor beats Paper"
        }
    }
}


function game(e) {
    const playerSelection = e.target.innerText;
    const computerSelection = getComputerChoice()
    let resultData = playRound(playerSelection, computerSelection)
    resultString = `${resultData}\nPlayer Points: ${playerPoints}     Computer Points: ${computerPoints}`

    if (playerPoints === 5) {
        resultString = resultString + "\n You Won! Game Over"
        playerPoints = 0;
        computerPoints = 0;

    }
    else if (computerPoints === 5) {
        resultString = resultString + "\n You lose! Game Over"
        playerPoints = 0;
        computerPoints = 0;
    }

    result.innerText = resultString;
}


const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
buttons.forEach(button => {
    button.addEventListener('click', game);
});

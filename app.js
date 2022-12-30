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

function getComputerChoice() {
    let choices = ["rock", "paper", "scissor"]
    let randomInd = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomInd]
    return computerChoice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return (["Game draw",0,0])
    }

    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            return (["You Lose! Paper beats Rock",0,1])
        }
        else {
            return (["You Wonnnnnn! Rock beats Scissor",1,0])
        }
    }

    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "scissor") {
            return (["You Lose! Scissor beats paper",0,1])
        }
        else {
            return (["You Wonnnnnn! Paper beats Rock",1,0])
        }
    }
    if (playerSelection.toLowerCase() === "scissor") {
        if (computerSelection === "rock") {
            return (["You Lose! Rock beats Scissor",0,1])
        }
        else {
            return (["You Wonnnnnn! Scissor beats Paper",1,0])
        }
    }
}


function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt("What is your choice Rock, Paper or Scissor? ");
        const computerSelection = getComputerChoice()
        let resultData = playRound(playerSelection, computerSelection)
        playerPoints+=resultData[1]
        computerPoints+=resultData[2]
        console.log(resultData[0])
    }
    console.log(`After 5 round your score is ${playerPoints} and computer score is ${computerPoints}.`)
    if(playerPoints===computerPoints){
        console.log("Game draw. Nobody lose.")
    }
    else if(playerPoints>computerPoints){
        console.log("You won. Partyyyyyyyyy")
    }
    else{
        console.log("You lose! Better luck next time")
    }
}


game()

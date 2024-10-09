let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";
let message = "";
const playerScore = document.querySelector("#playerScore");
const compScore = document.querySelector("#computerScore");

function getComputeChoice() {
  const play = ["rock", "paper", "scissors"];
  const choice = play[Math.floor(Math.random() * 3)];
  return choice;
}

function playRound(humanChoice, computerChoice) {
  message = "";
  computerChoice = getComputeChoice();
  if (winCondition(humanChoice, computerChoice) === humanChoice) {
    humanScore++;
    message = `You win! ${humanChoice} beats ${computerChoice}`;
  } else if (winCondition(humanChoice, computerChoice) === computerChoice) {
    computerScore++;
    message = `You lose! ${computerChoice} beats ${humanChoice}`;
  } else {
    message = `It's a draw, you both chose ${humanChoice}`;
  }
  playerScore.textContent = `your score: ${humanScore}`;
  compScore.textContent = `computer score: ${computerScore}`;
  return message;
}

function winCondition(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  )
    return humanChoice;
  else if (humanChoice === computerChoice) return null;
  else return computerChoice;
}

const buttons = document.querySelector(".buttons");
const pEl = document.querySelector("#result");

buttons.addEventListener("click", function () {
  switch (event.target.id) {
    case "rock":
      playRound("rock", computerChoice);
      break;
    case "paper":
      playRound("paper", computerChoice);
      break;
    case "scissors":
      playRound("scissors", computerChoice);
      break;
  }
  pEl.textContent = message;
});

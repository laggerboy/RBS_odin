let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";

function getComputeChoice() {
  const play = ["rock", "paper", "scissors"];
  const choice = play[Math.floor(Math.random() * 3)];
  return choice;
}

function getHumanChoice() {
  humanChoice = "";
  while (
    humanChoice !== "rock" ||
    humanChoice !== "paper" ||
    humanChoice !== "scissors"
  ) {
    humanChoice = prompt("What hand will you play, mortal?", "rock");
    if (
      humanChoice.toLowerCase() === "rock" ||
      humanChoice.toLowerCase() === "paper" ||
      humanChoice.toLowerCase() === "scissors"
    )
      humanChoice = humanChoice.toLowerCase();
    return humanChoice;
  }
}

function playRound(humanChoice, computerChoice) {
  let message = "";
  humanChoice = getHumanChoice();
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

function playGame() {
  for (let i = 0; i < 5; i++) {
    let roundResult = playRound();
    console.log(roundResult);
  }
}

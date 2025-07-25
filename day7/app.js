
let randomNumber = Math.floor(Math.random() * 20) + 1; 
let attempts = 0;
let bestScore = null;

const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const newGameBtn = document.getElementById('new-game-btn');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const bestScoreDisplay = document.getElementById('best-score');


guessBtn.addEventListener('click', () => {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 50) {
    message.textContent = '🚨 Please enter a valid number between 1 and 20!';
    return;
  }

  attempts++;
  attemptsDisplay.textContent = attempts;

  if (userGuess === randomNumber) {
    message.textContent = '🎉 congrates! You guessed the correct number!';
    if (bestScore === null || attempts < bestScore) {
      bestScore = attempts;
      bestScoreDisplay.textContent = bestScore;
    }
    guessBtn.disabled = true; 
    guessInput.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = '📉 Too low! Try again.';
  } else {
    message.textContent = '📈 Too high! Try again.';
  }
});

newGameBtn.addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  attempts = 0;
  attemptsDisplay.textContent = attempts;
  message.textContent = 'Make your first guess!';
  guessInput.value = '';
  guessInput.disabled = false;
  guessBtn.disabled = false;
});
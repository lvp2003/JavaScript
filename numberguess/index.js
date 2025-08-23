const min = 1;
const max = 100;

const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${min} - ${max} :`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("⚠️ Please enter a valid number");
  } else if (guess < min || guess > max) {
    window.alert(`⚠️ Enter a number between ${min} and ${max}`);
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("📉 TOO LOW, try again!");
    } else if (guess > answer) {
      window.alert("📈 TOO HIGH, try again!");
    } else {
      window.alert(
        `🎉 Correct! The answer was ${answer}. It took you ${attempts} attempts.`
      );
      running = false;
    }
  }
}

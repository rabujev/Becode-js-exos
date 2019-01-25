const readlineSync = require("readline-sync");

let randomNumber = Math.round(Math.random() * 100)
let guessedNumber = readlineSync.questionInt("Guess the number | ")
while (guessedNumber !== randomNumber) {
  if (guessedNumber > randomNumber) {
    console.log("Too high");
    guessedNumber = readlineSync.questionInt("Guess the number | ");
  } else if (guessedNumber < randomNumber) {
    console.log("Too low");
    guessedNumber = readlineSync.questionInt("Guess the number | ");
  }
}
if (guessedNumber === randomNumber) {
  console.log("Well guessed!");
}

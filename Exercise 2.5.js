const readlineSync = require("readline-sync");
let favNumber = parseInt(readlineSync.question("What's your favorite number bro? | "))
while (favNumber !== 42) {
  console.log("Are you sure bro?");
  favNumber = parseInt(readlineSync.question("What's your favorite number bro? | "))
}
console.log("Same as me bro");
// Ici, j'ai beaucoup bloqué car j'ai oublié de parseInt pour transformer la réponse à la question de string en number //

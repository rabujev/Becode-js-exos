const readlineSync = require("readline-sync");
let firststDecimal = parseInt(readlineSync.question("Give me a decimal "));
let secondDecimal = parseFloat(readlineSync.question("Another one "));
console.log(firststDecimal * secondDecimal);
// je parse float car je veux garder la partie décimale du deuxième nombre//

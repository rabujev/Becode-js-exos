const readlineSync = require("readline-sync");
let firststDecimal = parseInt(readlineSync.question("Give me a decimal "));
let secondDecimal = parseFloat(readlineSync.question("Another one "));
console.log(firststDecimal % Math.trunc(secondDecimal));
// L'opération modulo (%) (pour afficher le reste d'une division d'entiers) ne marche que pour des entiers ( c'est pourquoi je math trunc)//

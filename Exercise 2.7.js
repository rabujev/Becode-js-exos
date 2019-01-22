const readlineSync = require("readline-sync");
let n = parseFloat(readlineSync.question("Enter a number | "));
console.log("You entered the number " + n + " so you will now need to enter " + n + " additionnal numbers.");
let y = 0;
let sum = 0;
while (n > y) {
  let z = parseFloat(readlineSync.question("Enter a number | "));
  ++y;
  sum = sum + z
}
console.log("The sum of the " + n + " numbers you entered is equal to " + sum);

// Ici, la leçon importante est le système de compteur : on définit une variable compteur et on lui donne la val 0...//
//On crée ensuite une loop avec un while et à chaque loop on ajoute 1 à la valeur compteur et la boucle ne s'arrete que quand la val de la var compteur est = au nombre souhaité//
//Je dois me renseigner sur les ; //

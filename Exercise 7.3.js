const readlineSync = require("readline-sync");
// il y a une formule mathématique pour aller plus vite mais
// je préf passer à des exos plus intéressants donc je brute force

n = readlineSync.questionInt("Enter a number | ");
let compteur = (n / 2) + 1
let array = []
while (compteur !== 1) {
  if (n % compteur == 0) {
    array.push(compteur);
  };
  --compteur
};
console.log("Here are all the divisors of " + n + " (except 1 and itself): " + array);

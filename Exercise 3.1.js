const readlineSync = require("readline-sync");
let x = [100, 101, 102];  //We define the array//
let sum = 0; // We define the sum variable and we give it 0 value (or else it doesn't work)//
for (let elem of x) { // We change the value of the sum by adding up every single element of the array to it//
  sum += elem;
}
console.log(sum);

// Ici, le for of permet de créer une alternative plus efficiente au système de compteur de l'exo 2.7//
// La partie avant le 'of' n'a pas d'importance tant que c'est un texte //

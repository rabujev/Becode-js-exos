const readlineSync = require("readline-sync");
let array1 = [10, 55, 100];  //We define the array
let sum = 0; // We define the sum variable and we give it 0 value (or else it doesn't work)//
for (let elem of array1) { // We change the value of the sum by adding up every single element of the array to it//
  sum += elem;
}
let average = sum / array1.length; //We define the average variable//
console.log(average);

//Ici, si on définissait la val de average avant que la val de sum soit mise à jour ça marcherait pas, le résultat serait toujours 0 (logique puisque js lit le code de haut en bas)//

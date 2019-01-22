const readlineSync = require("readline-sync");
let array1 = [10, 55, 100];  //We define the array to be duplicated//
let array2 = []; // We define the second array that's goind to be filled with the exact same content as the first one//
for (let elem of array1) { //On utilise 'for of' pour désigner tous les elem du array1
  array2.push(elem);   //On remplit l'array 2 avec elem qui a été défini pour désigner tous les elem du array1 juste au dessus
}
console.log(array2); //On affiche l'array 2

//2ème méthode
let array3 = array2.slice()
console.log(array3);

//slice allows us to copy an array or part of an array : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice //

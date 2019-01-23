const readlineSync = require("readline-sync");
let rand10 = () => {   // c'est la fonction qui return un nombre random entre 1 et 10
  return parseInt((Math.random()*10) + 1);   //au lieu de parseInt on peut Math.floor (plus logique)
}
let n = readlineSync.question("Enter the number of random numbers that need to be generated | ")
let multiRand = (n) => {  //fonction qui return un array avec n nombres random entre 1 et 10
  let array1 = [];
  let z = 0;
  while (n > z) {
  array1.push(rand10());
  ++z;
  }
  return array1
}
console.log(multiRand(n));

//The random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive). : https://www.w3schools.com/jsref/jsref_random.asp

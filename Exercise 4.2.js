const readlineSync = require("readline-sync");
let rand10 = () => {
  return parseInt((Math.random()*10) + 1);   //au lieu de parseInt on peut Math.floor (plus logique)
}
console.log(rand10());

//The random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive). : https://www.w3schools.com/jsref/jsref_random.asp

const readlineSync = require("readline-sync");
//___________________________________________________________________________________________________________________
let rand10 = () => {   // c'est la fonction qui return un nombre random entre 1 et 10
  return parseInt((Math.random()*10) + 1);   //au lieu de parseInt on peut Math.floor (plus logique)
}
//___________________________________________________________________________________________________________________
let multiRand = (n) => {  //fonction qui return un array avec n nombres random entre 1 et 10
  let arr = [];
  let z = 0;
  while (n > z) {
  arr.push(rand10());
  ++z;
  }
  return arr
}
//___________________________________________________________________________________________________________________
let average = (x) => { // fonction afficher average d'un array x
  let sum = 0;
  for (let elem of x) {
    sum += elem;
  }
  return sum / arr.length
}
//___________________________________________________________________________________________________________________
let min = (x) => {  // fonction afficher min d'un array x
  return Math.min(...x)
}
//___________________________________________________________________________________________________________________
let max = (x) => {  // fonction afficher max d'un array x
  return Math.max(...x)
}
//___________________________________________________________________________________________________________________
let n = readlineSync.question("Enter the number of random numbers that need to be generated | ")
let arr = multiRand(n);
console.log("Here are the generated numbers: [" + arr + "]");
console.log("The average of these numbers amounts to " + average(arr));
console.log("The lowest number amongst them is " + min(arr));
console.log("The highest number amongst them is " + max(arr));

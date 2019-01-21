const readlineSync = require("readline-sync");
let numOfremainingquestions = 3
let firstName = readlineSync.question("What's your name? | " + numOfremainingquestions + " questions remaining | ");
let age = readlineSync.question("How old are you? | " + (numOfremainingquestions - 1) + " questions remaining | ");
let favColor = readlineSync.question("What's your favorite color? | " + (numOfremainingquestions - 2) + " questions remaining | ");
let currentYear = readlineSync.question("What is the current year? | " + (numOfremainingquestions - 3) + " questions remaining | ");
console.log("On the first of january of " + (parseInt(currentYear) + parseInt(age)) + ", you will be twice as old as your current self but your favorite color will still be " + favColor + ". Want to bet ?");
//I don't like the way I coded the numOfremainingquestions variable, is there a more efficient, logical way to do it?//

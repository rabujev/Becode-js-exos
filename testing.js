const readlineSync = require("readline-sync");
let numOfremainingquestions = 4
let firstName = readlineSync.question("What's your name? | " + (numOfremainingquestions -= 1) + " questions remaining | ");
let age = readlineSync.question("How old are you? | " + (numOfremainingquestions -= 1) + " questions remaining | ");
let favColor = readlineSync.question("What's your favorite color? | " + (numOfremainingquestions -= 1) + " questions remaining | ");
let currentYear = readlineSync.question("What is the current year? | " + (numOfremainingquestions -= 1) + " questions remaining | ");
console.log("On the first of january of " + (parseInt(currentYear) + parseInt(age)) + ", you will be twice as old as your current self but your favorite color will still be " + favColor + ". Want to bet ?");
//I don't like the way I coded the numOfremainingquestions variable, is there a more efficient, logical way to do it?//
// Edit 2 :found the way to fix it, it's pretty simple actually, just use -- operation (because it permanentyl changes the value of the variable (but then why does a - 1 for ex doesn't do the same ?)//
// Edit 3 :another method is to use -= on each line because it changes the value of the variable too//

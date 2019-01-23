const readlineSync = require("readline-sync");
//___________________________________________________________________________________________________________________
let factorial = (a) => {
  if (a > 1) {
    return (a * factorial((a - 1)))
  }
  else {
    return 1
  }
}
let a = readlineSync.questionInt("Enter a number you wish to have the factorial function applied to | ")
console.log("The factorial of " + a + " is equal to " + factorial(a));

const readlineSync = require("readline-sync");

let n = readlineSync.questionInt("Enter a number | ")

//F de n = f de n-1 + f de n-2
//F0 = 0
//F1 = F2 = 1

let f = []
f[0] = 0
f[1] = 1
f[2] = 1
let i = 3
while (i < n) {
f[i] = (f[(i - 1)] + f[(i - 2)]);
  i++;
};
console.log("Here are the " + n + " first Fibonacci numbers : " + f);

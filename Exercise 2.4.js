const readlineSync = require("readline-sync");
let x = 1
while (x <= 100) {
  if (x % 2 === 0) {
    y = x / 2 ;
  } else if (x % 2 === 1) {
    y = x * 3;
  }
  console.log(x++, y);
}
//Pris bcp de temps pour celui-ci , important : la virgule entre 2 variables number pour console.log//

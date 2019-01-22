const readlineSync = require("readline-sync");

for (let x = 0; x < 100; x += 2) {
  console.log(x);
}
console.log("Deuxième version de la boucle");
x = 0
while (x < 100) {
  x++
  if (x % 2 === 0) {
    console.log(x);
  }
}

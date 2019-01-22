const readlineSync = require("readline-sync");
let min = parseInt(readlineSync.question("Enter min number | "));
let max = parseInt(readlineSync.question("Enter max number | "));
let current = parseInt(readlineSync.question("Enter current number | "));
if ((min <= current) && (current <= max)) {
  console.log("Current is within the boundaries");
} else {
  console.log("Current is not within the boundaries");
}
if (min > max) {
  console.log("Error : Min greater than max? C'mon bro...");
}

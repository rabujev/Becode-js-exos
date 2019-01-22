const readlineSync = require("readline-sync");
let calcSurface = (length, width) => {
  return length * width;
}
length = parseFloat(readlineSync.question("This is a program that calculates the surface of a rectangle | Enter length | "))
width = parseFloat(readlineSync.question("Enter width | "))
console.log("The surface is equal to " + calcSurface(length, width));

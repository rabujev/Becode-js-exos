const readlineSync = require("readline-sync");
//___________________________________________________________________________________________________________________
//carré hypothénuse = somme des carrés des 2 autres côtés
//or on peut considérer la distance entre 2 pts en 2D comme l'hypothénuse du triangle qui a comme cotés la différence d'
//abscisse ainsi que la différence d'ordonnées
console.log("This program calculates the distance between 2 points in a 2D space");
let x1 = readlineSync.questionFloat("Enter the x-coordinate of the first point | ")
let y1 = readlineSync.questionFloat("Enter the y-coordinate of the first point | ")
let x2 = readlineSync.questionFloat("Enter the x-coordinate of the second point | ")
let y2 = readlineSync.questionFloat("Enter the y-coordinate of the second point | ")
let coordArray = [x1, y1, x2, y2]
let calcDistance = (x) => {
  return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))
}
console.log("The distance between the two points is " + calcDistance(coordArray));

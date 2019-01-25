//Create a program that will re-use the Rectangle class you created previously.
// It should generate 1000 random instances of Rectangle with random positions
// and sizes. Then it will display all colliding rectangles amongst those
//that were generated that way.
// the maths behind the method : https://stackoverflow.com/questions/31022269/collision-detection-between-two-rectangles-in-java
//if you don't have a 'return' in a function, it will return 'undefined' by default

const readlineSync = require("readline-sync");
// class that creates a rectangle
class Rectangle {
  constructor(topLeftXPos, topLeftYPos, width, length){
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.length = length;
  }
  //method to tell wether a given rectangle colllides with another given rectangle
  collides(rectangle2){
    return (this.topLeftYPos - this.width < rectangle2.topLeftYPos &&
    this.topLeftYPos > rectangle2.topLeftYPos - rectangle2.width &&
    this.topLeftXPos + this.length > rectangle2.topLeftXPos &&
    this.topLeftXPos < rectangle2.topLeftXPos + rectangle2.length);
  }
};
// Function to generate x amount of rectangles with the rectangle class and stock them in an array
function generate_x_Rectangles(x) {
  let allRectangles = [];
  let compteur = 0;
  while (compteur < x) {
    ++compteur;
    allRectangles.push(new Rectangle((Math.round((Math.random() * 100))), (Math.round((Math.random() * 100))), (Math.round((Math.random() * 10))), (Math.round((Math.random() * 10)))));
  };
  return allRectangles;
}
// I generate a thousand (guidelines)
let allRectangles = generate_x_Rectangles(50);
//this a function to list all collisions between all the rectangles of a given array
function testCollisions(x) {
  let compteur1 = 0;
  let compteur2 = 0;
  while (compteur1 < x.length) {
    compteur2 = 0;
    while (compteur2 < x.length) {
      if ((compteur1 !== compteur2) && (x[compteur1].collides(x[compteur2]))) {
        console.log("rectangle n° " + compteur1 + " collides with rectangle n° " + compteur2);
        };
      compteur2++;
    };
    compteur1++;
  };
};
testCollisions(allRectangles);

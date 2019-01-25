class Rectangle {
  constructor(topLeftXPos, topLeftYPos, width, length){
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.length = length;
  }
  collides(rectangle2){
    if (this.topLeftYPos - this.width < rectangle2.topLeftYPos &&
    this.topLeftYPos > rectangle2.topLeftYPos - rectangle2.width &&
    this.topLeftXPos + this.length > rectangle2.topLeftXPos &&
    this.topLeftXPos < rectangle2.topLeftXPos + rectangle2.length) {
      return rectangle1 + " collides with " + this
    }
  }
};
let rectangle1 = new Rectangle(0, 0, 5, 10);
let rectangle2 = new Rectangle(11, 6, 6, 11);
console.log("Collision between the 2 rectangles: " + rectangle1.collides(rectangle2));


// need to test wether a given rectangle collides with another one
// the maths behind the method : https://stackoverflow.com/questions/31022269/collision-detection-between-two-rectangles-in-java


// Created this "à l'arrache", need to take a course on classes because
//I feel like I'm coding blindfolded

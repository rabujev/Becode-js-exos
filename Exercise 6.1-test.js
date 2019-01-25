class Circle {
  constructor(xPos, yPos, radius){
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
  }
  move(xOffset, yOffset){
    this.xPos += xOffset;
    this.yPos += yOffset;
    return this.xPos
  }
  get surface() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
let circle1 = new Circle(0, 0, 10)

console.log(circle1.surface);
circle1.move(5,10)
console.log(circle1);

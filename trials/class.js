class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get name() {
    return this.name;
  }
  set name(somename) {
    this.name = somename;
  }

  get area() {
    return calcArea(); 
  }

  calcArea() {
    return this.height * this.width; 
  }
}

let polygon = new Polygon();
polygon.height = 3;
polygon.width = 4;
console.log(polygon.height);
console.log(polygon.calcArea());


class Animal {
  constructor(name) {
    this.name = name;
  }
  say() {
     console.log(this.name + ' try to say something');
  }
}
class Dog extends Animal {
  say() {
    super.say();
    console.log(this.name + ' barking...');
  }
}
let dog = new Dog('gg');
dog.say();


class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}
let pointA = new Point(4, 4);
let pointB = new Point(3, 4);
console.log(Point.distance(pointA, pointB));

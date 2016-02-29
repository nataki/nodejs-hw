/**
 * Created by nataki on 2/28/16.
 */
var shapes = require('./Shape');

console.log("--- RECTANGLE TEST ---");
var rect = new shapes.Rectangle(100, 50);
console.log(rect.area);
console.log(rect.perimeter);

rect.printArea('m');
rect.printArea('cm');
rect.printArea();

rect.printPerimeter('m');
rect.printPerimeter('cm');
rect.printPerimeter();

console.log("--- CIRCLE TEST ---");
var circle = new shapes.Circle(15);

circle.printArea('cm');
circle.printArea();
circle.printPerimeter('cm');
circle.printPerimeter();

console.log("--- TRIANGLE TEST ---");
var triangle = new shapes.Triangle(10, 30,30);

triangle.printArea('cm');
triangle.printArea();
triangle.printPerimeter('cm');
triangle.printPerimeter();

console.log("--- TRAPEZOID TEST ---");
var trapezoid = new shapes.Trapezoid(10, 30,30);

trapezoid.printArea('cm');
trapezoid.printArea();
trapezoid.printPerimeter('cm');
trapezoid.printPerimeter();


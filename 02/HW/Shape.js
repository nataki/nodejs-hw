/**
 * Created by nataki on 2/20/16.
 */
class Shape {
    constructor(){

    }
    getPerimeter() {

    }

    getArea() {

    }

    static format(value, metrics) {

    }
}

class Rectangle extends Shape {
    constructor(a, b) {
        this.width = a;
        this.height = b;
    }
    getPerimeter() {
        return (this.width + this.height)*2;
    }
    getArea() {
        return this.width * this.height;
    }

}

class Circle extends Shape {
    constructor(r) {
        this.r = r;
    }
    getPerimeter() {
        return 2*Math.PI*this.r;
    }
    getArea() {
        return Math.PI*Math.pow(this.r, 2);
    }
}
class Triangle extends Shape {
    constructor(a, b, c) {
        this.sides = [a, b, c];
    }
    getPerimeter() {
        return this.sides.reduce(function(sum, item){return sum+item},0);
    }
    getArea() {
        let s = this.getPerimeter()/2;
        return Math.sqrt(this.sides.reduce(function(v, item){ return (s-item)*v},s));
    }
}
class Trapezoid extends Shape {
    constructor(b1, b2, h) {
        this.b1 = b1;
        this.b2 = b2;
        this.h = h;
    }
    getPerimeter() {
        return this.b1 + this.b2 + this.h;
    }
    getArea() {
        return this.a*(this.b1 + this.b2)/2;
    }
}
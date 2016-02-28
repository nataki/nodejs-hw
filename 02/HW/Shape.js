/**
 * Created by nataki on 2/20/16.
 */

/*

 Calculator of perimeter and area of geometric shapes
 Use ES6 classes to create a base class for geometric shapes with the possibility of calculating perimeter,
 area and format the output of these values (in millimeters/centimeter/meters for perimeter and millimeters²/centimeters²/meters² for area).
 After create classes for the Rectangle, Circle, Triangle and Trapezoid. They have to use the general functionality from the base class and have to include only the specific code for specific shape.

 */
'use strict';

class Shape {

    constructor(type){
        this._type = type;
    }
    getPerimeter() {
        return 0;
    }

    getArea() {
        return 0;
    }

    printPerimeter(units) {
        units = units || 'mm';
        console.log(`${this._type} perimiter in ${units}: ${Shape.formatPerimeter(this.getPerimeter(), units)}`);
    }

    printArea(units) {
        units = units || 'mm';
        let area = Shape.formatArea(this.getArea(), units);
        console.log(`${this._type} area in ${units}: ${area}`);
    }

    static formatPerimeter(value, units) {
        let formattedValue = value;
        switch (units) {
            case 'm':
                formattedValue = value / 1000;
                break;
            case 'cm':
                formattedValue = value / 100;
                break;
            case 'mm':
            default:
        }
        return formattedValue;
    }

    static formatArea(value, units) {
        let formattedValue = value;
        switch (units) {
            case 'm':
                formattedValue = value / (1000 * 1000);
                break;
            case 'cm':
                formattedValue = value / (100 * 100);
                break;
            case 'mm':
            default:
        }
        return formattedValue;
    }
}

class Rectangle extends Shape {
    constructor(a, b) {
        super('Rectangle');
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
        super('Circle');
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
        super('Triangle');
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
        super('Trapezoid');
        this.b1 = b1;
        this.b2 = b2;
        this.h = h;
    }
    getPerimeter() {
        return this.b1 + this.b2 + this.h;
    }

    getArea() {
        return this.h *(this.b1 + this.b2)/2;
    }
}


module.exports = {
    Rectangle: Rectangle,
    Trapezoid: Trapezoid,
    Circle: Circle,
    Triangle: Triangle
}
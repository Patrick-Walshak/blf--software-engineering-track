"use strict";
// creat a car class and use it to implement inheritance, polymorphism and encapsulation
class Car {
    color;
    brand;
    speed = 0;
    constructor(color, brand) {
        this.color = color;
        this.brand = brand;
    }
    //encapsulation
    setSpeed(speed) {
        if (speed > 0) {
            this.speed = speed;
        }
    }
    getSpeed() {
        return this.speed;
    }
    // polymorphism
    move() {
        console.log(`${this.brand} is moving at ${this.speed} km/ph`);
    }
}
//Inheritance
class ElectricCar extends Car {
    constructor(color, brand) {
        super(brand, color);
    }
    move() {
        console.log(`${this.brand} is moving at ${this.getSpeed} km/ph`);
    }
}
const car1 = new Car("Black", "BMW");
car1.setSpeed(80);
const car2 = new Car("Ash Stew", "Tesla");
car2.setSpeed(90);
car1.move();
car2.move();
console.log(car1);
console.log(car2);

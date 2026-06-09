// creat a car class and use it to implement inheritance, polymorphism and encapsulation


class Car {

    public color: String
    protected brand: String
    private speed: number = 0

    constructor(color: String, brand:String) {
        this.color = color
        this.brand = brand
    }


    //encapsulation
    setSpeed(speed:number){
        if(speed > 0){
            this.speed = speed
        }
    }

    getSpeed(): number{
        return this.speed
    }

    // polymorphism
    move(): void {
        console.log(
            `${this.brand} is moving at ${this.speed} km/ph`
    );
  }
}


    //Inheritance
class ElectricCar extends Car{
    constructor(color:string, brand:string){
        super(brand, color)
    }

    move(): void{
        console.log(`${this.brand} is moving at ${this.getSpeed} km/ph`)
    }
}

const car1 = new Car("Black", "BMW");
car1.setSpeed(80);

const car2 = new Car("Ash Stew", "Tesla");
car2.setSpeed(90);


car1.move()
car2.move()

console.log(car1)
console.log(car2)

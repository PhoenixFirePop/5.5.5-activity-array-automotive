//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

class Vehicle {
    constructor(make, model, year, color, mileage) {        
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
    }
//Note: You can code your derived Car class here or make a file named index.js and do it there.
//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
    }

//TO DO: Creating Instances and Testing Them

    // start() {
    //     if (this.fuel > 0) {
    //         return this.started = true;
    //         console.log("engine started...!!!");
    //     } else {
    //         return this.started = false;
    //         console.log("engine cannot start...");
    //     }
    // }
    // accelerate() {
    //     if (this.started) {
    //         if (this.fuel > 0) {
    //             console.log(this.speed += 1);
    //             this.fuel = this.fuel - 1;
    //         } else {
    //             console.log("out of fuel.");
    //             this.stop();
    //         }
    //     } else {
    //         alert("You need to start the engine first.");
    //     }
    // }
    // decelerate() {
    //     if (this.started) {
    //         if (this.fuel > 0) {
    //             if (this.speed > 0) {
    //                 console.log(this.speed -= 1);
    //                 this.fuel = this.fuel - 1;
    //             } else {
    //                 console.log(this + " has stopped moving");
    //                 this.fuel = this.fuel - 1;
    //             }
    //         } else {
    //             console.log("out of fuel.");
    //             this.stop();
    //         }
    //     } else {
    //         alert("You need to start the engine first.");
    //     }
    // }
    // stop() {
    //     this.started = false;
    // }

    // typeOfVehicle(wheels) {
    //     if (this.numberOfWheels == 8 && 8 == wheels) {
    //         console.log(this.model + " " + this.make + " is a Truck");
    //     } else if (this.numberOfWheels == 4 && 4 == wheels) {
    //         console.log(this.model + " " + this.make + " is a CAr");
    //     } else if (this.numberOfWheels == 2 && 2 == wheels) {
    //         console.log(this.model + " " + this.make + " is a Bike");
    //     } else {
    //         console.log("Unknown type of vehicle");
    //     }
    // }
    // }

    checkService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }

    start() {
        if (this.fuel > 0) {            
            console.log("engine has started.");
            return this.started = true
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " not have enough space to take all passengers.");

            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }


}


let myCar = new Car("Mercury", "Sedan", "1965", "color", "mileage")

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)



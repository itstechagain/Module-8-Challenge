// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // Declare properties of the Truck class
  // vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // vin(string) color(string) make(string) model(string) year(number) weight(number) topSpeed(number) wheels(Wheel[], towingCapacity(number)
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    // Create a constructor that accepts the properties of the Truck class
    // The constructor should initialize the properties of the Truck class
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    // The constructor should call the constructor of the parent class, Vehicle
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

     // Check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not 
     if (wheels.length !== 4) {
      this.wheels = [
        new Wheel(18, "Goodyear"),
        new Wheel(18, "Goodyear"),
        new Wheel(18, "Goodyear"),
        new Wheel(18, "Goodyear"),
      ];
    } else {
      this.wheels = wheels;
    }

    // Initialize towing capacity
    this.towingCapacity = towingCapacity;
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // Get the make an model of the vehicle if it exists
    const vehicleDetails = `${vehicle.make} ${vehicle.model}`;
    // Check if the vehicle's weight is less than or equal to the truck's towing capacity
    if (vehicle.weight <= this.towingCapacity) {
      // If it is, log that the vehicle is being towed
      console.log(`Truck ${this.make} ${this.model} is towing ${vehicleDetails}.`);
    } else {
      // If it is not, log that the vehicle is too heavy to be towed
      console.log(`The vehicle ${vehicleDetails} is too heavy to be towed.`);
    }
  }

    // Override the printDetails method from the Vehicle class
    override printDetails(): void {
    // The method should call the printDetails method of the parent class
    super.printDetails();
    // The method should log the details of the Truck
    // the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    console.log(
      `Wheels: ${this.wheels.map((wheel, index) => `Wheel ${index + 1}: ${wheel.getDiameter} inch with a ${wheel.getTireBrand} tire`).join(', ')}`
    );
  }
}

// Export the Truck class as the default export
export default Truck;

/**
 * A class to represent an individual car that is being
 * viewed and configured in the user interface.
 */
export class Car {
    price: number | null;
    make: string;
    year: number;
    model: string;
    addOns: Object;


    /**
     * Constructs a new Car with the given price, name, year
     * and empty AddOns map.
     * Price of the car initially set to -1 as price of the car is not know during initialization
     * @param make The make of the car
     * @param model The model of the car
     * @param year The model year of the car
     * @param price The price of the car
     * @param addOns A mapping of addon names to AddOn objects
     */
    constructor(make: string, year: number, model: string, price?: number, addOns?: Object) {
        this.make = make;
        this.price = price !== undefined ? price : null;
        this.year = year;
        this.model = model;
        this.addOns = addOns !== undefined ? addOns : new Map();
    }
}
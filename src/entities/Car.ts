import { AddOn, AddOnJSON } from "./AddOn";

/**
 * A class to represent an individual car that is being
 * viewed and configured in the user interface.
 */
export class Car {
  price: number;
  make: string;
  model: string;
  year: number;
  kms: number;
  addOns: Map<string, AddOn>;

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
  constructor(
    price: number,
    make: string,
    model: string,
    year: number,
    kms: number,
    addOns: Map<string, AddOn> = new Map()
  ) {
    this.make = make;
    this.price = price;
    this.year = year;
    this.model = model;
    this.kms = kms;
    this.addOns = addOns;
  }

  static from(json: CarJSON) {
    return new Car(
      json.price,
      json.make,
      json.model,
      json.year,
      json.kms,
      new Map(
        Object.keys(json.addOns).map((k) => {
          return [k, json.addOns[k]];
        })
      )
    );
  }

  toJSON() {
    let addOnObject: { [key: string]: AddOn } = {};
    return {
      ...this,
      addOns: [...this.addOns.values()].reduce((obj, v) => {
        obj[v.name] = v;
        return obj;
      }, addOnObject),
    };
  }
}

export type CarJSON = {
  price: number;
  make: string;
  model: string;
  year: number;
  kms: number;
  addOns: { [key: string]: AddOnJSON };
};

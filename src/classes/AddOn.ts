/**
 * A class to represent an individual add-on that
 * can be added to a car.
 */

export class AddOn {
  name: string;
  price: number;
  description: string;

  /**
   * Constructs a new AddOn objects with the given name, price,
   * and description.
   * @param name
   * @param price
   * @param description
   */
  constructor(name: string, price: number, description: string) {
    console.log(price);
    this.name = name;
    this.price = price;
    this.description = description;
  }

  static from(json: AddOnJSON) {
    return new AddOn(json.name, json.price, json.description);
  }
}

export type AddOnJSON = {
  name: string;
  price: number;
  description: string;
};
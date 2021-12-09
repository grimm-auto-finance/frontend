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
   * @param name The addon name
   * @param price The addon price
   * @param description The addon description
   */
  constructor(name: string, price: number, description: string) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  /**
   * Creates an instance of an addOn from the corresponding Json
   * @param json The Json from which the addOn is created
   */
  static from(json: AddOnJSON) {
    return new AddOn(json.name, json.price, json.description);
  }
}

export type AddOnJSON = {
  name: string;
  price: number;
  description: string;
};

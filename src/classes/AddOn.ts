/**
 * A class to represent an individual add-on that
 * can be added to a car.
 */


export class AddOn {
  name: string;
  price: number | null;
  description: string | null;

  /**
   * Constructs a new AddOn objects with the given name, price,
   * and description.
   * @param name
   * @param price
   * @param description
   */
  constructor(name: string, price?: number, description?: string | undefined) {
    console.log(price);
    this.name = name;
    this.price = price !== undefined ? price : null;
    this.description = description !== undefined ? description : null;
  }
}

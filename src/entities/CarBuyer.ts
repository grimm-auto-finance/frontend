/**
 * A class to represent an individual person buying a car
 * Stores all necessary information about the person that is
 * used by the Senso API and our functions to determine the
 * returned loan.
 */
export class CarBuyer {
  creditScore: number;
  budget: number;
  downpayment: number;

  /**
   * Constructs a new CarBuyer with the specified
   * budget and credit score.
   * @param creditScore The credit score of the buyer
   * @param budget The budget of the buyer
   * @param downpayment The down payment amount of the buyer
   */
  constructor(budget: number, creditScore: number, downpayment: number) {
    this.budget = budget;
    this.creditScore = creditScore;
    this.downpayment = downpayment;
  }

  static from(json: CarBuyerJSON) {
    return new CarBuyer(json.budget, json.creditScore, json.downpayment);
  }
}

export type CarBuyerJSON = {
  creditScore: number;
  budget: number;
  downpayment: number;
};

/**
 * A class to represent an individual person buying a car
 * Stores all necessary information about the person that is
 * used by the Senso API and our functions to determine the
 * returned loan.
 */
export class CarBuyer {
    creditScore: number;
    budget: number;

    /**
     * Constructs a new CarBuyer with the specified
     * budget and credit score.
     * @param creditScore
     * @param budget
     */
    constructor(budget: number, creditScore: number) {
        this.budget = budget;
        this.creditScore = creditScore;
    }

    getCarBuyer() {
        return {"budget": this.budget, "credit score": this.creditScore};
    }
}


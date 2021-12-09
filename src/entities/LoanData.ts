/**
 * A class to represent a loan, as determined
 * by the Senso API /rate and /score functions
 * based on a given CarBuyer and Car.
 */
export class LoanData {
  interestRate: number;
  installment: number;
  installments: {
    capital: number;
    interest: number;
    installment: number;
    remain: number;
    interestSum: number;
  }[];
  sensoScore: string;
  amount: number;
  term: number;
  interestSum: number;
  addOnBudget: number;

  /**
   * Constructs a new LoanData object with the given values.
   * @param interestRate The interest rate of the loan
   * @param installment The loan installments
   * @param sensoScore The senso score of the loan
   * @param amount The loan amount
   * @param term The term length of the loan in months
   * @param interestSum The total added sum due to interest
   * @param addOnBudget The budget for add ons
   */
  constructor(
    interestRate: number,
    installment: number,
    installments: {
      capital: number;
      interest: number;
      installment: number;
      remain: number;
      interestSum: number;
    }[],
    sensoScore: string,
    amount: number,
    term: number,
    interestSum: number,
    addOnBudget: number
  ) {
    this.interestRate = interestRate;
    this.installment = installment;
    this.installments = installments;
    this.sensoScore = sensoScore;
    this.amount = amount;
    this.term = term;
    this.interestSum = interestSum;
    this.addOnBudget = addOnBudget;
  }

  /**
   * Creates an instance of LoanData from the corresponding Json
   * @param json The corresponding json used to generate the loan data
   */
  static from(json: LoanDataJSON) {
    return new LoanData(
      json.interestRate,
      json.installment,
      json.installments,
      json.sensoScore,
      json.amount,
      json.term,
      json.interestSum,
      json.addOnBudget
    );
  }
}

export type LoanDataJSON = {
  interestRate: number;
  installment: number;
  installments: {
    capital: number;
    interest: number;
    installment: number;
    remain: number;
    interestSum: number;
  }[];
  sensoScore: string;
  amount: number;
  term: number;
  interestSum: number;
  addOnBudget: number;
};

/**
 * A class to represent a loan, as determined
 * by the Senso API /rate and /score functions
 * based on a given CarBuyer and Car.
 */
export class LoanData {
  interestRate: number;
  installment: number;
  sensoScore: string;
  amount: number;
  term: number;
  interestSum: number;

  /**
   * Constructs a new LoanData object with the given values.
   * @param interestRate The interest rate of the loan
   * @param installment The loan installments
   * @param sensoScore The senso score of the loan
   * @param amount The loan amount
   * @param term The term length of the loan in months
   * @param interestSum The total added sum due to interest
   */
  constructor(
    interestRate: number,
    installment: number,
    sensoScore: string,
    amount: number,
    term: number,
    interestSum: number
  ) {
    this.interestRate = interestRate;
    this.installment = installment;
    this.sensoScore = sensoScore;
    this.amount = amount;
    this.term = term;
    this.interestSum = interestSum;
  }

  /**
   * Creates an instance of LoanData from the corresponding Json
   * @param json The corresponding json used to generate the loan data
   */
  static from(json: LoanDataJSON) {
    return new LoanData(
      json.interestRate,
      json.installment,
      json.sensoScore,
      json.amount,
      json.term,
      json.interestSum
    );
  }
}

export type LoanDataJSON = {
  interestRate: number;
  installment: number;
  sensoScore: string;
  amount: number;
  term: number;
  interestSum: number;
};

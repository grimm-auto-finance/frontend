/**
 * A class to represent a loan, as determined
 * by the Senso API /rate and /score functions
 * based on a given CarBuyer and Car.
 */
export class LoanData {
  interestRate: number;
  installment: number;
  sensoScore: string;
  loanAmount: number;
  termLength: number;
  interestSum: number;

  /**
   * Constructs a new LoanData object with the given values.
   * @param interestRate
   * @param installment
   * @param sensoScore
   * @param loanAmount
   * @param termLength
   * @param interestSum
   */
  constructor(
    interestRate: number,
    installment: number,
    sensoScore: string,
    loanAmount: number,
    termLength: number,
    interestSum: number
  ) {
    this.interestRate = interestRate;
    this.installment = installment;
    this.sensoScore = sensoScore;
    this.loanAmount = loanAmount;
    this.termLength = termLength;
    this.interestSum = interestSum;
  }

  static from(json: LoanDataJSON) {
    return new LoanData(
      json.interestRate,
      json.installment,
      json.sensoScore,
      json.loanAmount,
      json.termLength,
      json.interestSum
    );
  }
}

export type LoanDataJSON = {
  interestRate: number;
  installment: number;
  sensoScore: string;
  loanAmount: number;
  termLength: number;
  interestSum: number;
};

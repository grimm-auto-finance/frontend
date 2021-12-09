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
    interestSum: number
  ) {
    this.interestRate = interestRate;
    this.installment = installment;
    this.installments = installments;
    this.sensoScore = sensoScore;
    this.amount = amount;
    this.term = term;
    this.interestSum = interestSum;
  }

  static from(json: LoanDataJSON) {
    return new LoanData(
      json.interestRate,
      json.installment,
      json.installments,
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
};

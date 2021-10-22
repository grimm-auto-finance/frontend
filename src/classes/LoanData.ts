
/**
 * A class to represent a loan, as determined
 * by the Senso API /rate and /score functions
 * based on a given CarBuyer and Car.
 */
export class LoanData {
    interestRate: number | null;
    installment: number | null;
    sensoScore: string | null;
    loanAmount: number | null;
    termLength: number | null;
    interestSum: number | null;


    /**
     * Constructs a new LoanData object with the given values.
     * @param interestRate
     * @param installment
     * @param sensoScore
     * @param loanAmount
     * @param termLength
     * @param interestSum
     */
    constructor(interestRate?: number, installment?: number, sensoScore?: string, loanAmount?: number, termLength?: number, interestSum?: number) {
        this.interestRate = interestRate !== undefined ? interestRate : null;
        this.installment = installment !== undefined ? installment : null;
        this.sensoScore = sensoScore !== undefined ? sensoScore : null;
        this.loanAmount = loanAmount !== undefined ? loanAmount : null;
        this.termLength= termLength !== undefined ? termLength : null;
        this.interestSum = interestSum !== undefined ? interestSum : null;
    }
}
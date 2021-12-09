import { Car, CarBuyer, LoanData } from "../entities";
import { LoanDataJSON } from "../entities/LoanData";

/**
 * The fetcher for the loan data obtained by interpretations of the customers chosen car as well as the customers
 * personal information
 * @param carBuyer The information of the customer
 * @param car The car selected by the customer
 */
export default async (carBuyer: CarBuyer, car: Car): Promise<LoanData> => {
  const res = await fetch(import.meta.env.VITE_BACKEND_BASE_URL + "/loan", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ carBuyer: carBuyer, car: car, loopMax: -1 }),
  });

  if (res.ok) {
    return LoanData.from((await res.json()) as LoanDataJSON);
  } else {
    throw new Error(await res.text());
  }
};

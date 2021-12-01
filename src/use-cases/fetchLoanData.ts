import { Car, CarBuyer, LoanData } from "../entities";
import { LoanDataJSON } from "../entities/LoanData";

export default async (carBuyer: CarBuyer, car: Car): Promise<LoanData> => {
  const res = await fetch(import.meta.env.VITE_BACKEND_BASE_URL + "/loan", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ carBuyer: carBuyer, car: car }),
  });

  if (res.ok) {
    return LoanData.from((await res.json()) as LoanDataJSON);
  } else {
    throw new Error();
  }
};

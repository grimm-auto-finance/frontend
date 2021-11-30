import { Car, CarBuyer, LoanData } from "../entities";

export default async (carBuyer: CarBuyer, car: Car): Promise<LoanData> => {
  const res = await fetch(import.meta.env.VITE_BACKEND_BASE_URL + "/loan", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ carBuyer: carBuyer, car: car }),
  });

  if (res.ok) {
    // TODO: refactor this on the backend since we don't need this data back
    return res
      .json()
      .then((res) => LoanData.from(res.loan)) as Promise<LoanData>;
  } else {
    throw new Error();
  }
};

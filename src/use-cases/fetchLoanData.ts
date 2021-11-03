import { Car, CarBuyer, LoanData } from "../entities";

export default async (carBuyer: CarBuyer, car: Car): Promise<LoanData> => {
  const res = await fetch(import.meta.env.VITE_BACKEND_BASE_URL + "/loan", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ carBuyer: carBuyer, car: car }),
  });

  console.log(JSON.stringify({ carBuyer: carBuyer, car: car }));

  if (res.ok) {
    return res.json() as Promise<LoanData>;
  } else {
    throw new Error();
  }
};

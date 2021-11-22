import { Car } from "../entities";
import { CarJSON } from "../entities/Car";

export default async (searchString: string): Promise<Car[]> => {
  const res = await fetch(import.meta.env.VITE_BACKEND_BASE_URL + "/search", {
    method: "POST",
    body: searchString,
  });
  if (res.ok) {
    const json = await res.json();
    return json.map((c: { car: CarJSON }) => Car.from(c.car));
  } else {
    throw new Error();
  }
};

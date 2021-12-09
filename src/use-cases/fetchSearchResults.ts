import { Car } from "../entities";
import { CarJSON } from "../entities/Car";

/**
 * Fetcher of the cars matching the search input of the customers
 * @param searchString The customers search string
 */
export default async (searchString: string): Promise<Car[]> => {
  const res = await fetch(import.meta.env.VITE_BACKEND_BASE_URL + "/search", {
    method: "POST",
    body: searchString,
  });
  if (res.ok) {
    const json = await res.json();
    return json.map((c: CarJSON) => Car.from(c));
  } else {
    throw new Error(await res.text());
  }
};

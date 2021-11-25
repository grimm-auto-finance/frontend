import { Car } from "../entities";

export default async (id: number): Promise<Car[]> => {
  const res = await fetch(import.meta.env.VITE_BACKEND_BASE_URL + "/addons", {
    method: "POST",
    body: id.toString(),
  });
  if (res.ok) {
    const json = await res.json();
    // @ts-ignore
    return json.map((c) => Car.from(c));
  } else {
    throw new Error();
  }
};

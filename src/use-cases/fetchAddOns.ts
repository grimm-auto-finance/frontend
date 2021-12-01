import { Car } from "../entities";

export default async (id: number): Promise<Car> => {
  const res = await fetch(import.meta.env.VITE_BACKEND_BASE_URL + "/addons", {
    method: "POST",
    // TODO: refactor the backend to accept a string with the number instead of json so we don't need to do this
    body: JSON.stringify({ id: id }),
  });
  if (res.ok) {
    const json = await res.json();
    // @ts-ignore
    return Car.from(json);
  } else {
    throw new Error();
  }
};

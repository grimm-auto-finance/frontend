import { AddOn } from "../entities";

/**
 * A fetcher for the list of addons corresponding to the specific car which was chosen by the customer in the
 * userform with the provided unique car id
 * @param id The unique car id of the customers chosen car
 */
export default async (id: number): Promise<AddOn[]> => {
  const res = await fetch(import.meta.env.VITE_BACKEND_BASE_URL + "/addons", {
    method: "POST",
    body: id.toString(),
  });

  if (res.ok) {
    const json = await res.json();
    return json.map((a: AddOn) => AddOn.from(a));
  } else {
    throw new Error();
  }
};

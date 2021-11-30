import { AddOn, Car } from "../entities";

export default async (id: number): Promise<AddOn[]> => {
  const res = await fetch(import.meta.env.VITE_BACKEND_BASE_URL + "/addons", {
    method: "POST",
    body: id.toString(),
  });
  if (res.ok) {
    const json = await res.json();
    // @ts-ignore
    return json.map((c) => AddOn.from(c));
  } else {
    throw new Error();
  }
};

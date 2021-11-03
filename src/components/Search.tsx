import { useState } from "react";
import { Car } from "../entities/Car";

const Search = () => {
  const [searchResults, setSearchResults] = useState<Car[]>([]);

  async function getSearchResults(searchString: string) {
    const res = await fetch(import.meta.env.VITE_BACKEND_BASE_URL + "/search", {
      method: "POST",
      body: searchString,
    });
    if (res.ok) {
      const json = await res.json();
      // @ts-ignore
      setSearchResults(json.map((c) => Car.from(c)));
    } else {
      // TODO: Handle errors here
    }
  }

  return (
    <div className="m-4 mb-8">
      <input
        className="rounded-3xl border-2 p-4"
        id="Budget"
        type="search"
        placeholder="Search"
        onChange={(input) => getSearchResults(input.target.value)}
        required
      />
      {searchResults.map((car, i) => (
        <div className="bg-white m-4 border-2 rounded-md" key={i}>
          {car.year} {car.make} {car.model}
        </div>
      ))}
    </div>
  );
};

export default Search;

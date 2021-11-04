import { useState } from "react";
import { Car } from "../entities/Car";
import fetchSearchResults from "../use-cases/fetchSearchResults";

const Search = () => {
  const [searchResults, setSearchResults] = useState<Car[]>([]);

  return (
    <>
      <div className="flex items-center mb-5 inline-block">
        <label className="inline-block w-auto mr-6 text-start">Search</label>
        <div className="flex-1 py-2 border-b-2 border-red-300 text-end">
          <input
            id="Search"
            type="search"
            placeholder="Search"
            name="search"
            onChange={async (input) =>
              setSearchResults(await fetchSearchResults(input.target.value))
            }
            required
          />
        </div>
      </div>
      {searchResults.map((car, i) => (
        <div className="bg-white m-4 border-2 rounded-md" key={i}>
          {car.year} {car.make} {car.model}
        </div>
      ))}
    </>
  );
};

export default Search;

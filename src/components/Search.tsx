import { useState } from "react";
import { Car } from "../entities/Car";
import fetchSearchResults from "../use-cases/fetchSearchResults";

const Search = () => {
  const [searchResults, setSearchResults] = useState<Car[]>([]);

  return (
    <div className="m-4 mb-8">
      <input
        className="rounded-3xl border-2 p-4"
        id="Budget"
        type="search"
        placeholder="Search"
        onChange={async (input) =>
          setSearchResults(await fetchSearchResults(input.target.value))
        }
        required
      />
      {searchResults.map((car, i) => (
        <div className="bg-white m-4 border-2 rounded-md" key={i}>
          {"$"}
          {car.price} {"-"} {car.year} {car.make} {car.model} {car.kilometres}{" "}
          {"kms"}
        </div>
      ))}
    </div>
  );
};

export default Search;

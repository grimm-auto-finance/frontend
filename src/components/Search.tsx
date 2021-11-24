import { useState }  from "react";
import React, { Component } from 'react';
import { Car } from "../entities/Car";
import fetchSearchResults from "../use-cases/fetchSearchResults";
import AutoFill from "./AutoFill";

const Search = () =>  {
    const [searchResults, setSearchResults] = useState<Car[]>([]);

    return (
      <div className="bg-gray-100 pb-32">
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
        <AutoFill searchResults={searchResults} />
        </div>
      </div>
      );
    };

export default Search;

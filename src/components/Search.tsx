import { useState } from "react";
import fetchSearchResults from "../use-cases/fetchSearchResults";
import { Car, CarBuyer } from "../entities";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchResults, setSearchResults] = useState<Car[]>([]);
  const [car, setCar] = useState<Car>();
  const [creditScore, setCreditScore] = useState(0);
  const [pytBudget, setpytBudget] = useState(0);
  const [downpayment, setDownpayment] = useState(0);

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
        <div>
          {searchResults.map((car, i) => (
            <div className="bg-white m-4 border-2 rounded-md" key={i}>
              <button
                type="button"
                onClick={() => {
                  const confirmBox = window.confirm(
                    "Are you sure want an " +
                      String(car.model) +
                      " " +
                      String(car.make) +
                      " from " +
                      String(car.year)
                  );
                  if (confirmBox === true) {
                    setCar(car);
                  }
                }}
              >
                {"$"}
                {car.price} {"-"} {car.year} {car.make} {car.model}{" "}
                {car.kilometres} {car.id}
                {"kms"}
              </button>
            </div>
          ))}
          <div>
            <form>
              <div className="m-4 mb-8"></div>
              <div className="flex items-center mb-5">
                <label className="inline-block w-auto mr-6 text-start">
                  {" "}
                  Credit Score:{" "}
                </label>
                <div className="flex-1 py-2 border-b-2 border-red-300 text-end">
                  <input
                    id="Credit Score"
                    type="number"
                    placeholder="Credit Score"
                    name="creditScore"
                    onChange={(input) =>
                      setCreditScore(parseInt(input.target.value))
                    }
                    required
                  />
                </div>
              </div>

              <div className="flex items-center mb-5 ">
                <label className="inline-block w-auto mr-6 text-start">
                  {" "}
                  Budget:{" "}
                </label>
                <div className="flex-1 py-2 border-b-2 border-red-300 text-end">
                  <input
                    id="Budget"
                    type="number"
                    placeholder="Enter Budget"
                    name="pytBudget"
                    onChange={(input) =>
                      setpytBudget(parseFloat(input.target.value))
                    }
                    required
                  />
                </div>
              </div>

              <div className="flex items-center mb-5 pb-8">
                <label className="inline-block w-auto mr-6 text-start">
                  Down Payment:{" "}
                </label>
                <div className="flex-1 py-2 border-b-2 border-red-300">
                  <input
                    id="downpayment"
                    type="number"
                    step={0.01}
                    placeholder="Down Payment"
                    name="downpayment"
                    onChange={(input) =>
                      setDownpayment(parseFloat(input.target.value))
                    }
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-200 text-3xl text-gray-400 rounded-lg text-center py-8 px-32"
              >
                <Link
                  to="/dashboard"
                  state={{
                    car: car,
                    carBuyer: new CarBuyer(pytBudget, creditScore, downpayment),
                  }}
                >
                  Enter
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

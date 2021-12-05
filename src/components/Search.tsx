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
      <div className="m-4 mb-8 ">
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
        <div >
          <div>
          {searchResults.map((car, i) => (
            <div className="antialiased bg-gray-100 text-gray-500
          flex flex-col justify-center h-full
          rounded-none bg-red-100 hover:bg-red-300
          dark:bg-blue-900 dark:hover:bg-gray-500 dark:text-white " key={i}>
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
                <table className="table-auto w-full ">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 dark:text-gray-100 dark:bg-blue-600">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left"> Vehicle</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">
                      {" "}
                      Kms Driven
                    </div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Price</div>
                  </th>
                </tr>
                </thead>
                <tbody className="text-2xl divide-y divide-gray-100">
                <tr>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                            className="rounded-full"
                            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Car_Icon.svg"
                            width="40"
                            height="40"
                        />
                      </div>
                      <div className="pl-5 font-medium text-gray-800 dark:text-white ">
                        {" "}
                        {car.make} {car.model} {","} {car.year}{" "}
                      </div>
                    </div>
                  </td>

                  <td className="p-3 whitespace-nowrap">
                    <div className="text-left">
                      {" "}
                      {car.kilometres} {"kms"}{" "}
                    </div>
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    <div className="text-left font-medium text-green-500">
                      {"$"} {car.price}
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
              </button>
            </div>
          ))}
          <div>
            <form>
              <div className="flex justify-between bg-gray-100 rounded border-0 border-t-4 hover:border-blue-900 mb-8">
                <div className="flex items-center inline bg-gray-200 py-2 px-4 text-gray-600 select-none"></div>
                <label className="flex items-center bg-transparent py-1 text-gray-600 px-4 focus:outline-none p-30 ">
                  {" "}
                  Credit Score:{" "}
                </label>
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
                <div className="flex items-center inline bg-gray-200 py-2 px-4 text-gray-600 select-none"></div>
              </div>

              <div className="flex justify-between bg-gray-100 rounded border-0 border-t-4 hover:border-blue-900 mb-8">
                <div className="flex items-center inline bg-gray-200 py-2 px-4 text-gray-600 select-none">
                  $
                </div>
                <label className="flex items-center bg-transparent py-1 text-gray-600 px-4 focus:outline-none p-30 ">
                  {" "}
                  Monthly Budget:{" "}
                </label>
                <input
                  className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none"
                  id="Budget"
                  type="number"
                  placeholder="Enter Budget"
                  name="pytBudget"
                  onChange={(input) =>
                    setpytBudget(parseFloat(input.target.value))
                  }
                  required
                />
                <div className="flex items-center inline bg-gray-200 py-2 px-4 text-gray-600 select-none">
                  .00
                </div>
              </div>

              <div className="flex justify-between bg-gray-100 rounded border-0 border-t-4 hover:border-blue-900 mb-8">
                <div className="flex items-center inline bg-gray-200 py-2 px-4 text-gray-600 select-none">
                  $
                </div>
                <label className="flex items-center bg-transparent py-1 text-gray-600 px-4 focus:outline-none p-30 ">
                  Down Payment:{" "}
                </label>
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
                <div className="flex items-center inline bg-gray-200 py-2 px-4 text-gray-600 select-none">
                  .00
                </div>
              </div>


              <button
                type="submit"
                className="bg-blue-200 text-3xl text-gray-400 rounded-lg text-center py-8 px-28 transform hover:scale-105 duration-300 ease-in-out"
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
    </div>
  );
};

export default Search;

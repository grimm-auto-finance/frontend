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
  const [mode, setMode] = useState(false);

  const handleClick = () => {
    setMode(!mode);
  };

  return (
    <div className="justify-center pt-4">
      <form className=" w-auto">
        <div className="flex justify-center rounded border-0 border-t-4 border-b-4 hover:border-blue-800 mb-8 m-4 h-auto">
          <div className="flex items-center inline bg-gray-200 py-2 px-4 text-gray-600 select-none">
            {"  "}
          </div>
          <label className="flex items-center bg-transparent py-1 px-4 focus:outline-none p-30 m-4 p-6">
            Credit Score:
          </label>
          <input
            className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-full"
            id="Credit Score"
            type="number"
            placeholder="Credit Score"
            name="creditScore"
            onChange={(input) => setCreditScore(parseInt(input.target.value))}
            required
          />
          <div className="flex items-center inline bg-gray-200 py-4 px-4 select-none"></div>
        </div>

        <div className="flex justify-center rounded border-0 border-t-4 border-b-4 hover:border-blue-800 mb-8 m-4 h-auto">
          <div className="flex items-center inline bg-gray-200 py-2 px-4 text-gray-600 select-none">
            $
          </div>
          <label className="flex items-center bg-transparent py-1 px-4 focus:outline-none p-30 m-4 p-6">
            {" "}
            Monthly Budget:{" "}
          </label>
          <input
            className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-full"
            id="Budget"
            type="number"
            placeholder="Enter Budget"
            name="pytBudget"
            onChange={(input) => setpytBudget(parseFloat(input.target.value))}
            required
          />
          <div className="flex items-center inline bg-gray-200 py-2 px-4 text-gray-600 select-none">
            .00
          </div>
        </div>

        <div className="flex justify-center rounded border-0 border-t-4 border-b-4 hover:border-blue-800 mb-8 m-4 h-auto">
          <div className="flex items-center inline bg-gray-200 py-2 px-4 text-gray-600 select-none">
            $
          </div>
          <label className="flex items-center bg-transparent py-1  px-4 focus:outline-none p-30 m-4 p-6">
            Down Payment:{" "}
          </label>
          <input
            className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-full"
            id="downpayment"
            type="number"
            step={0.01}
            placeholder="Down Payment"
            name="downpayment"
            onChange={(input) => setDownpayment(parseFloat(input.target.value))}
            required
          />
          <div className="flex items-center inline bg-gray-200 py-4 px-4 text-gray-600 select-none">
            .00
          </div>
        </div>
      </form>

      <div>
        <div>
          <input
            className="rounded-3xl border-2 p-4 mb-8"
            id="Budget"
            type="search"
            placeholder="Search"
            onChange={async (input) =>
              setSearchResults(await fetchSearchResults(input.target.value))
            }
            required
          />
        </div>

        <div className="overflow-y-auto">
          <div className=" h-44 mb-1">
            {searchResults.map((car, i) => (
              <div
                className="antialiased
          flex flex-col justify-center
          rounded-none hover:bg-blue-300"
                key={i}
              >
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
                  <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 dark:text-gray-100 dark:bg-blue-600">
                      <tr>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            {" "}
                            Vehicle
                          </div>
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
                              {/* TODO: Use the respective car Image */}
                              <img
                                className="pl-2 rounded-full"
                                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Car_Icon.svg"
                                width="40"
                                height="40"
                              />
                            </div>
                            <div className="pl-5 font-medium">
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
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-400 text-3xl rounded-lg text-center m-6 py-6 px-20 transform hover:text-white hover:bg-blue-800 hover:scale-105 duration-300 ease-in-out"
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
    </div>
  );
};

export default Search;

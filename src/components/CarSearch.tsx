import React from "react";
import { Car } from "../entities";
import fetchSearchResults from "../use-cases/fetchSearchResults";

/**
 * Selects list of cars that corresponds to the users search input, and then stores the specific car that the user
 * selected fro the list of cars
 */
interface calls {
  onCarChange(op: Car): any;
  onCarListChange(op: Car[]): any;
  searchResults: Car[];
}

/**
 * Constructs the properties needed to be stored from the Car search call
 */
class CarSearch extends React.Component<calls, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <input
            className="rounded-3xl border-2 p-4 mb-8"
            id="Budget"
            type="search"
            placeholder="Search"
            onChange={async (input) =>
              {
                try {
                  let res = await fetchSearchResults(input.target.value);
                  this.props.onCarListChange(res)
                } catch (error) {
                  window.alert("There was a problem with the database: " + error)
                }}
            }
            required
          />
        </div>
        <div className="overflow-y-auto">
          <div className=" h-44 mb-1">
            {this.props.searchResults.map((car, i) => (
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
                      this.props.onCarChange(car);
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
    );
  }
}

export default CarSearch;

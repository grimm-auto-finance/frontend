import AddOnContainer from "../components/AddOnContainer";
import Mercedes from "../car-images/Mercedes.png";
import MainDisplay from "../components/MainDisplay";
import { AddOn, Car, CarBuyer, LoanData } from "../entities";
import { mdiArrowLeft } from "@mdi/js";
import { useEffect, useState } from "react";
import fetchLoanData from "../use-cases/fetchLoanData";
import fetchAddOns from "../use-cases/fetchAddOns";
import { Link, useLocation } from "react-router-dom";

/**
 * Uses the input from the user input and the car selection to create the
 * data displayed in the dashboard
 * @constructor
 */
function Dashboard() {
  const [car, setCar] = useState<Car | null>(null);
  const [carBuyer, setCarBuyer] = useState<CarBuyer | null>(null);
  const [searchString, setSearchString] = useState<string | null>(null);
  const [addOns, setAddOns] = useState<AddOn[] | null>(null);
  const [loanData, setLoanData] = useState<LoanData | null>(null);
  const [mode, setMode] = useState(false);
  const handleClick = () => {
    setMode(!mode);
  };

  /**
   * Using the react router to obtain the use states of objects from the different componenets
   */
  const location = useLocation();

  /**
   * Performs the actions to obtain the data needed by the dashboard.
   */
  // @ts-ignore
  // @ts-ignore
  useEffect(async () => {
    // TODO: catch errors here
    const car = Car.from(location.state.car);
    const buyer = CarBuyer.from(location.state.carBuyer);
    setCar(car);
    setCarBuyer(buyer);
    try {
      let possibleAddons = await fetchAddOns(location.state.car.id);
      setAddOns(possibleAddons);
      let possibleLoan = await fetchLoanData(buyer, car);
      setLoanData(possibleLoan);
    } catch (error) {
      window.location.replace("/");
      window.alert("There with the data entered. Please try again: " + error);
    }
  }, []);

  return (
    <div>
      <div
        className={
          mode
            ? "bg-gray-800 w-auto shadow-xl text-white transition duration-700"
            : "bg-gray-100 shadow-xl w-auto text-gray-600 transition duration-700"
        }
      >
        <div className="flex h-screen overflow-hidden">
          <AddOnContainer
            car={car}
            carBuyer={carBuyer}
            addOns={addOns}
            loanData={loanData}
            searchString={searchString}
            setSearchString={setSearchString}
            setLoanData={setLoanData}
          />
          <div className="flex-grow flex flex-col">
            <div className="bg-blue-3000  shadow-lg h-16 flex justify-between">
              <Link
                to="/"
                className="h-full hover:drop-shadow-2xl transition hover:opacity-80"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-full fill-current p-3 inline-block"
                >
                  <path d={mdiArrowLeft} />
                </svg>
                <span className="inline-block">Back To Cars</span>
                <span></span>
              </Link>
              <div className="flex gap-4">
                <button
                  className="bg-blue-800 h-full w-12 transition"
                  onClick={handleClick}
                >
                  <div className="rounded-lg overflow-x-auto h-8">
                    {mode ? "🌙" : "☀️"}
                  </div>
                </button>
              </div>
            </div>
            <div className="flex-grow  flex justify-around px-16 py-8 overflow-y-scroll">
              <MainDisplay car={car} loanData={loanData} carBuyer={carBuyer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

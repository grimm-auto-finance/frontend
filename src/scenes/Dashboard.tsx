import AddOnContainer from "../components/AddOnContainer";
import Mercedes from "../car-images/Mercedes.png";
import MainDisplay from "../components/MainDisplay";
import { AddOn, Car, CarBuyer, LoanData } from "../entities";
import { mdiCog, mdiArrowLeft } from "@mdi/js";
import { useEffect, useState } from "react";
import fetchLoanData from "../use-cases/fetchLoanData";
import fetchAddOns from "../use-cases/fetchAddOns";
import { Link, useLocation } from "react-router-dom";

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

  const location = useLocation();

  function sensoInterpretation(sensoScore: String) {
    const SensMap = new Map();
    SensMap.set("VERY LOW", "1% - 20%");
    SensMap.set("LOW", "21% - 40%");
    SensMap.set("MEDIUM", "41% - 60%");
    SensMap.set("HIGH", "61% - 80%");
    SensMap.set("VERY HIGH", "81% - 100%");
    return SensMap.get(sensoScore);
  }

  // @ts-ignore
  useEffect(async () => {
    // TODO: catch errors here
    const car = Car.from(location.state.car);
    const buyer = CarBuyer.from(location.state.carBuyer);
    setCar(car);
    setCarBuyer(buyer);
    setAddOns(await fetchAddOns(location.state.car.id));
    setLoanData(await fetchLoanData(buyer, car));
  }, []);

  return (
    <div>
      <div
        className={
          mode
            ? "bg-gray-800 w-auto shadow-xl transition duration-700 text-white transition duration-700"
            : "bg-gray-100 shadow-xl  w-auto ransition duration-700 text-gray-600 transition duration-700"
        }
      >
        <div className="flex h-screen overflow-hidden">
          <AddOnContainer
            car={car}
            carBuyer={carBuyer}
            addOns={addOns}
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
                <button className="bg-blue-800 h-full w-12 transition">
                  <button
                    className="rounded-lg overflow-x-auto h-8 "
                    onClick={handleClick}
                  >
                    {mode ? "🌙" : "☀️"}
                  </button>
                </button>
              </div>
            </div>

            <div className="flex-grow  flex justify-around px-16 py-8 overflow-y-scroll">
              <MainDisplay car={car} loanData={loanData} />
              {(() => {
                if (car !== null && loanData !== null) {
                  return (
                    <div className="flex flex-col justify-between w-full">
                      <div className="flex-grow-0 text-center flex-shrink text-5xl font-rounded font-semibold">
                        {car.make} {car.model} {car.year}
                      </div>
                      {/* TODO: Add respective image of car from databse */}

                      <img className="max-w-xs mx-auto" src={Mercedes} />
                      <div className="bg-blue-300 border-0 border-b-8 hover:border-indigo-500 rounded-lg text-2xl font-semibold flex justify-between p-4">
                        <div className="font-rounded ml-8">SENSO Score</div>
                        <div className="text-blue-900 mr-8">
                          {sensoInterpretation(loanData.sensoScore)}
                        </div>
                      </div>
                      <div className="flex pt-4 gap-4">
                        <div className="flex-grow flex flex-col gap-4">
                          <div className="bg-blue-300 border-0 border-b-8 border-green-500 rounded-lg text-2xl font-semibold py-4 px-8 text-left">
                            <div className="font-rounded">Loan Amount</div>
                            <div className="text-green-600">
                              CAD ${loanData.amount}
                            </div>
                          </div>
                          <div className="bg-blue-300 border-0 border-b-8 border-yellow-500 rounded-lg text-2xl font-semibold py-4 px-8 text-left">
                            <div className="font-rounded">Term</div>
                            <div className="text-blue-900">
                              {loanData.term} Months
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow flex flex-col gap-4">
                          <div className="bg-blue-300 border-0 border-b-8 border-indigo-700 rounded-lg text-2xl font-semibold py-4 px-8 text-left">
                            <div className="font-rounded">Interest Rate</div>
                            <div className="text-blue-900">
                              {loanData.interestRate}%
                            </div>
                          </div>
                          <div className="bg-blue-300 border-0 border-b-8 border-red-700 rounded-lg text-2xl font-semibold py-4 px-8 text-left">
                            <div className="font-rounded">Amount Down</div>
                            <div className="text-blue-900">
                              {"$"}
                              {carBuyer?.downpayment}
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="bg-blue-700 border-0 border-l-8 hover:border-gray-400 rounded-sm shadow-xl hover:shadow-2xl transition h-auto my-3 text-2xl text-white hover:opacity-100 px-3 py-1 mx-auto">
                        Finalize Sale
                      </button>
                    </div>
                  );
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

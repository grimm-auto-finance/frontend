import AddOnBox from "../components/AddOnBox";
import Mercedes from "../car-images/Mercedes.png";
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

  const location = useLocation();

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
    <div className="flex h-screen overflow-hidden">
      <div className="bg-gray-200 shadow-xl z-10 p-4 flex flex-col gap-4 w-1/4 overflow-y-scroll">
        <div className="text-2xl font-semibold">Available Add-Ons</div>
        <div className="bg-red-400 p-2 rounded mt-8 resize">Add-Ons Budget</div>
        <input
          type="search"
          placeholder="Search"
          className="border-4 rounded p-2 border-red-400"
          onChange={async (event) => {
            setSearchString(event.target.value);
          }}
        />
        {car !== null && carBuyer !== null && addOns !== null
          ? (searchString === null
              ? [...addOns.values()]
              : [...addOns.values()].filter(
                  (a) =>
                    a.name.toLowerCase().indexOf(searchString.toLowerCase()) !==
                    -1
                )
            ).map((a, i) => {
              return (
                <AddOnBox
                  key={i}
                  addOn={a}
                  onAdd={async (addOn: AddOn) => {
                    car.addOns.set(addOn.name, addOn);
                    setLoanData(await fetchLoanData(carBuyer, car));
                  }}
                  onRemove={async (addOn: AddOn) => {
                    car.addOns.delete(addOn.name);
                    setLoanData(await fetchLoanData(carBuyer, car));
                  }}
                />
              );
            })
          : []}
      </div>
      <div className="flex-grow bg-white flex flex-col">
        <div className="bg-red-300 shadow-lg h-16 flex justify-between">
          <Link
            to="/"
            className="h-full hover:drop-shadow-2xl transition hover:opacity-80 text-white"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-full fill-current p-3 inline-block"
            >
              <path d={mdiArrowLeft} />
            </svg>
            <span className="inline-block">Back To Cars</span>
          </Link>
          <div className="flex gap-4">
            <button className="bg-red-500 h-full w-12 transition">
              <svg
                viewBox="0 0 24 24"
                className="text-white fill-current p-3 hover:drop-shadow-2xl transition inline-block w-12"
              >
                <path d={mdiCog} />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-grow flex justify-around px-16 py-8 overflow-y-scroll">
          {(() => {
            if (car !== null && loanData !== null) {
              return (
                <div className="flex flex-col justify-between w-full">
                  <div className="flex-grow-0 flex-shrink text-5xl font-rounded font-semibold">
                    {car.make} {car.model} {car.year}
                  </div>
                  <img className="max-w-xs mx-auto" src={Mercedes} />
                  <div className="bg-blue-50 rounded-lg text-2xl font-semibold flex justify-between p-4">
                    <div className="font-rounded">SENSO Score</div>
                    <div className="text-blue-900">{loanData.sensoScore}</div>
                  </div>
                  <div className="flex pt-4 gap-4">
                    <div className="flex-grow flex flex-col gap-4">
                      <div className="bg-blue-50 rounded-lg text-2xl font-semibold py-4 px-8 text-left">
                        <div className="font-rounded">Loan Amount</div>
                        <div className="text-blue-900">
                          CAD ${loanData.amount}
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-lg text-2xl font-semibold py-4 px-8 text-left">
                        <div className="font-rounded">Term</div>
                        <div className="text-blue-900">
                          {loanData.term} Months
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow flex flex-col gap-4">
                      <div className="bg-blue-50 rounded-lg text-2xl font-semibold py-4 px-8 text-left">
                        <div className="font-rounded">Interest Rate</div>
                        <div className="text-blue-900">
                          {loanData.interestRate}%
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-lg text-2xl font-semibold py-4 px-8 text-left">
                        <div className="font-rounded">Amount Down</div>
                        <div className="text-blue-900">TODO</div>
                      </div>
                    </div>
                  </div>
                  <button className="bg-red-400 rounded-3xl shadow-xl hover:shadow-2xl transition h-auto my-3 text-2xl text-white hover:opacity-100 px-3 py-1 mx-auto">
                    Finalize Sale
                  </button>
                </div>
              );
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

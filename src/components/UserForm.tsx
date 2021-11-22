import { useState } from "react";
import { Car, CarBuyer } from "../entities";
import fetchLoanData from "../use-cases/fetchLoanData";
import Search from "./Search";

const UserForm = () => {
  const [creditScore, setCreditScore] = useState(0);
  const [pytBudget, setpytBudget] = useState(0);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(0);
  const [kilometres, setKilometres] = useState(0);
  const [price, setPrice] = useState(0);
  const [downpayment, setDownPayment] = useState(0);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(
      fetchLoanData(
        new CarBuyer(pytBudget, creditScore, downpayment),
        new Car(kilometres, price, make, model, year)
      )
    );
  }

  return (
    <div className="bg-gray-100 pb-32">
      <div>
        <form onSubmit={handleSubmit}>
          <Search />

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
                  setDownPayment(parseFloat(input.target.value))
                }
                required
              />
            </div>
          </div>

          <div className="flex items-center mb-5 text-right">
            <label className="inline-block w-auto mr-6 text-start">
              {" "}
              Vehicle Make:{" "}
            </label>
            <div className="flex-1 py-2 border-b-2 border-red-300">
              <input
                id="Make"
                text-right
                type="text"
                placeholder="Enter Vehicle Make"
                name="vehicleMake"
                onChange={(input) => setMake(input.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex items-center mb-5">
            <label className="inline-block w-auto mr-6 text-start">
              {" "}
              Vehicle Model:{" "}
            </label>
            <div className="flex-1 py-2 border-b-2 border-red-300">
              <input
                id="Model"
                type="text"
                placeholder="Enter Vehicle Model"
                name="vehicleModel"
                onChange={(input) => setModel(input.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex items-center mb-5">
            <label className="inline-block w-auto mr-6 text-start">
              {" "}
              Vehicle Year:{" "}
            </label>
            <div className="flex-1 py-2 border-b-2 border-red-300">
              <input
                id="Year"
                type="number"
                placeholder="Enter Vehicle Year"
                name="vehicleYear"
                onChange={(input) => setYear(parseInt(input.target.value))}
                required
              />
            </div>
          </div>

          <div className="flex items-center mb-5">
            <label className="inline-block w-auto mr-6 text-start">
              {" "}
              Vehicle Distance Driven (KMs):{" "}
            </label>
            <div className="flex-1 py-2 border-b-2 border-red-300">
              <input
                id="Distance Driven"
                type="number"
                step={0.01}
                placeholder="Enter Distance"
                name="vehicleKms"
                onChange={(input) =>
                  setKilometres(parseFloat(input.target.value))
                }
                required
              />
            </div>
          </div>

          <div className="flex items-center mb-5 pb-8">
            <label className="inline-block w-auto mr-6 text-start">
              Vehicle Price:{" "}
            </label>
            <div className="flex-1 py-2 border-b-2 border-red-300">
              <input
                id="Price"
                type="number"
                step={0.01}
                placeholder="vehiclePrice"
                name="vehiclePrice"
                onChange={(input) => setPrice(parseFloat(input.target.value))}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-200 text-3xl text-gray-400 rounded-lg text-center py-8 px-32"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;

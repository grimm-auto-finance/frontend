import { useState } from "react";
import Search from "./Search";

const UserForm = () => {
  const [creditScore, setCreditScore] = useState(0);
  const [pytBudget, setpytBudget] = useState(0);
  const [vehicleMake, setvehicleMake] = useState("");
  const [vehicleModel, setvehicleModel] = useState("");
  const [vehicleYear, setvehicleYear] = useState(0);
  const [vehicleKms, setvehicleKms] = useState(0);
  const [vehiclePrice, setvehiclePrice] = useState(0);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const UserInfo = { creditScore, pytBudget };
    const CarInfo = {
      vehicleMake,
      vehicleModel,
      vehicleYear,
      vehicleKms,
      vehiclePrice,
    };
    const fullInfo = { "car buyer": UserInfo, car: CarInfo };

    const res = await fetch(import.meta.env.VITE_BACKEND_BASE_URL + "/loan", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(fullInfo),
    });

    if (res.ok) {
      console.log(await res.json());
    } else {
      console.error(await res.text());
    }
  }

  return (
    <div className="bg-gray-100 pb-32">
      <div>
        <form onSubmit={handleSubmit}>
          <Search />
          <hr className="border-b-2 border-t-0 my-16 border-red-300" />
          <div className="flex items-center mb-5 inline-block">
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

          <div className="flex items-center mb-5 inline-block ">
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

          <div className="flex items-center mb-5 inline-block text-right">
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
                onChange={(input) => setvehicleMake(input.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex items-center mb-5 inline-block">
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
                onChange={(input) => setvehicleModel(input.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex items-center mb-5 inline-block">
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
                onChange={(input) =>
                  setvehicleYear(parseInt(input.target.value))
                }
                required
              />
            </div>
          </div>

          <div className="flex items-center mb-5 inline-block">
            <label className="inline-block w-auto mr-6 text-start">
              {" "}
              Vehicle Distance Driven (KMs):{" "}
            </label>
            <div className="flex-1 py-2 border-b-2 border-red-300">
              <input
                id="Distance Driven"
                type="number"
                placeholder="Enter Distance"
                name="vehicleKms"
                onChange={(input) =>
                  setvehicleKms(parseFloat(input.target.value))
                }
                required
              />
            </div>
          </div>

          <div className="flex items-center mb-5 inline-block pb-8">
            <label className="inline-block w-auto mr-6 text-start">
              Vehicle Price:{" "}
            </label>
            <div className="flex-1 py-2 border-b-2 border-red-300">
              <input
                id="Price"
                type="number"
                placeholder="vehiclePrice"
                name="vehiclePrice"
                onChange={(input) =>
                  setvehiclePrice(parseFloat(input.target.value))
                }
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

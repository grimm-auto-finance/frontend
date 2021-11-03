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
  const [kms, setKms] = useState(0);
  const [price, setPrice] = useState(0);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(
      fetchLoanData(
        new CarBuyer(pytBudget, creditScore),
        new Car(price, make, model, year, kms)
      )
    );
  }

  return (
    <div className="UserForm">
      <Search />
      <form onSubmit={handleSubmit}>
        <label>Credit Score : </label>
        <input
          id="Credit Score"
          type="number"
          placeholder="Credit Score"
          name="creditScore"
          onChange={(input) => setCreditScore(parseInt(input.target.value))}
          required
        />

        <label> Budget : </label>
        <input
          id="Budget"
          type="number"
          step={0.01}
          placeholder="Enter Budget"
          name="pytBudget"
          onChange={(input) => setpytBudget(parseFloat(input.target.value))}
          required
        />

        <label> Vehicle Make: </label>
        <input
          id="Make"
          type="text"
          placeholder="Enter Vehicle Make"
          name="vehicleMake"
          onChange={(input) => setMake(input.target.value)}
          required
        />

        <label> Vehicle Model: </label>
        <input
          id="Model"
          type="text"
          placeholder="Enter Vehicle Model"
          name="vehicleModel"
          onChange={(input) => setModel(input.target.value)}
          required
        />

        <label> Vehicle Year: </label>
        <input
          id="Year"
          type="number"
          placeholder="Enter Vehicle Year"
          name="vehicleYear"
          onChange={(input) => setYear(parseInt(input.target.value))}
          required
        />

        <label> Vehicle Distance Driven (KMs): </label>
        <input
          id="Distance Driven"
          type="number"
          step={0.01}
          placeholder="Enter Distance Driven"
          name="vehicleKms"
          onChange={(input) => setKms(parseFloat(input.target.value))}
          required
        />

        <label>Vehicle Price: </label>
        <input
          id="Price"
          type="number"
          step={0.01}
          placeholder="Price"
          name="vehiclePrice"
          onChange={(input) => setPrice(parseFloat(input.target.value))}
          required
        />

        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default UserForm;

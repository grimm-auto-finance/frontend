import { useState } from "react";
import React, { Component } from "react";
import { Car, CarBuyer } from "../entities";
import fetchLoanData from "../use-cases/fetchLoanData";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

interface Props {
  car_: Car | undefined;
}

const UserForm: React.FC<Props> = ({
  car_
}) => {
  const [creditScore, setCreditScore] = useState(0);
  const [pytBudget, setpytBudget] = useState(0);
  // TODO: Change ID not to be hardcoded or even used here
  const id = 5;
  const [downpayment, setDownpayment] = useState(0);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (typeof car_ !== 'undefined') {
      console.log(
        fetchLoanData(
          new CarBuyer(pytBudget, creditScore, downpayment),
          // id is hardcoded for now
          car_
        )
      );
    }
  }

  return (
    <Router>
    <div>
      <form onSubmit={handleSubmit}>
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
              onChange={(input) => setCreditScore(parseInt(input.target.value))}
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
              onChange={(input) => setpytBudget(parseFloat(input.target.value))}
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
          <Link to="/Dashboard">Enter</Link>
        </button>
      </form>
      <Route exact path="/Dashboard" component={Dashboard} />
    </div>
    </Router>
  );
};

export default UserForm;

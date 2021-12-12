import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Enterbutton from "../components/Enterbutton";
import CarBuyerInputs from "../components/CarBuyerInputs";
import CarSearch from "../components/CarSearch";
import "tailwindcss/tailwind.css";

import React from "react";
import { Car } from "../entities";

class Userform extends React.Component<
  {},
  {
    mode: boolean;
    car: Car | undefined;
    searchResults: Car[];
    creditScore: number;
    pytBudget: number;
    downpayment: number;
  }
> {
  /**
   * A constructor for the properties to be obtained in the userform so that they can be stored and sent to the
   * dashboard
   * @param props The properties that are inputted in the userform from the customer and sent to the Dashboard
   * to be processed and displayed
   */
  constructor(props: any) {
    super(props);
    this.setTheme = this.setTheme.bind(this);
    this.setCar = this.setCar.bind(this);
    this.setSearch = this.setSearch.bind(this);
    this.setCredit = this.setCredit.bind(this);
    this.setBudget = this.setBudget.bind(this);
    this.setDownpayment = this.setDownpayment.bind(this);
    this.state = {
      mode: false,
      car: undefined,
      searchResults: [],
      creditScore: 0,
      pytBudget: 0,
      downpayment: 0,
    };
  }

  /**
   * Sets the theme of the webpage between light and dark mode
   * @param op The users choice for theme between true and false for dark mode
   */
  setTheme(op: boolean) {
    this.setState({ mode: op });
  }

  /**
   * A setter for the current use state of the customers car
   * @param op The users chosen car
   */
  setCar(op: Car) {
    this.setState({ car: op });
  }

  /**
   * A setter for the current state of the users scar search result
   * @param op The users car search result
   */
  setSearch(op: Car[]) {
    this.setState({ searchResults: op });
  }

  /**
   * A setter for the customers credit score
   * @param op The customers credit score
   */
  setCredit(op: number) {
    this.setState({ creditScore: op });
  }

  /**
   * A setter for the customers budget
   * @param op The customers budget
   */
  setBudget(op: number) {
    this.setState({ pytBudget: op });
  }

  /**
   * A setter for the customers downpayment
   * @param op The customers downpayment
   */
  setDownpayment(op: number) {
    this.setState({ downpayment: op });
  }

  /**
   * A function that renders the dashboard so its viewable by the users
   */
  render() {
    const mode = this.state.mode;
    const handleClick = () => {
      this.setTheme(!this.state.mode);
    };

    return (
      <div>
        <div className="text-center">
          <div
            className={
              mode
                ? "bg-gray-800 w-auto p-6 shadow-xl text-white transition duration-700"
                : "bg-gray-100 shadow-xl  mb-5 w-auto  p-6 text-gray-600 transition duration-700"
            }
          >
            <button
              className="inline-block rounded-lg overflow-x-auto h-8"
              onClick={handleClick}
            >
              {mode ? "🌙" : "☀️"}
            </button>
            <Navbar />
            <CarBuyerInputs
              onCreditChange={this.setCredit}
              onBudgetChange={this.setBudget}
              onDownpaymentChange={this.setDownpayment}
            />
            <CarSearch
              onCarChange={this.setCar}
              onCarListChange={this.setSearch}
              searchResults={this.state.searchResults}
            />
            <Enterbutton
              creditScore={this.state.creditScore}
              downpayment={this.state.downpayment}
              pytBudget={this.state.pytBudget}
              car={this.state.car}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Userform;

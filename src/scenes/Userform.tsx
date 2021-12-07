import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Enterbutton from "../components/Enterbutton";
import CarBuyerInputs from "../components/CarBuyerInputs";
import CarSearch from "../components/CarSearch";
import "tailwindcss/tailwind.css";
import React from "react";
import { Car } from "../entities";

class Userform extends React.Component<{}, { mode: boolean, car: Car | undefined, searchResults: Car[], creditScore: number, pytBudget: number, downpayment: number }> {

  constructor(props: any) {
    super(props);
    this.setMode = this.setMode.bind(this);
    this.setCar = this.setCar.bind(this);
    this.setSearch = this.setSearch.bind(this);
    this.setCredit = this.setCredit.bind(this);
    this.setBudget = this.setBudget.bind(this);
    this.setDownpayment = this.setDownpayment.bind(this);
    this.state = {mode: false, car: undefined, searchResults: [], creditScore: 0, pytBudget: 0, downpayment: 0};
  }

  setMode(op: boolean) {
    this.setState({mode: op})
  }

  setCar(op: Car) {
    this.setState({car: op})
  }

  setSearch(op: Car[]) {
    this.setState({searchResults: op})
  }

  setCredit(op: number) {
    this.setState({creditScore: op})
  }

  setBudget(op: number) {
    this.setState({pytBudget: op})
  }

  setDownpayment(op: number) {
    this.setState({downpayment: op})
  }

  render() {

    const mode = this.state.mode;
    const handleClick = () => {
      this.setMode(!this.state.mode);
    };

    return (
      <div>
        <div className="text-center">
          <div
            className={
              mode
                ? "bg-gray-800 w-auto p-6 shadow-xl transition duration-700 text-white transition duration-700"
                : "bg-gray-100 shadow-xl  mb-5 w-auto  p-6 transition duration-700 text-gray-600 transition duration-700"
            }
          >
            <button
              className="inline-block rounded-lg overflow-x-auto h-8"
              onClick={handleClick}
            >
              {mode ? "🌙" : "☀️"}
            </button>
            <Navbar />
            <CarBuyerInputs onCreditChange={this.setCredit} onBudgetChange={this.setBudget} onDownpaymentChange={this.setDownpayment}/>
            <CarSearch onCarChange={this.setCar} onCarListChange={this.setSearch} searchResults={this.state.searchResults}/>
          <Enterbutton creditScore={this.state.creditScore} downpayment={this.state.downpayment} pytBudget={this.state.pytBudget} car={this.state.car}/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Userform;

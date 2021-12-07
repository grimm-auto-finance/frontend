import logo from "../logo-new.png";
import "../App.css";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer";
import Search from "../components/Search";
import "tailwindcss/tailwind.css";
import { useState } from "react";
import React from "react";

class Userform extends React.Component<{}, { mode: boolean }> {

  constructor(props: any) {
    super(props);
    this.setMode = this.setMode.bind(this);
    this.state = {mode: false};
  }

  setMode(op: boolean) {
    this.setState({mode: op})
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
            <Search />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Userform;

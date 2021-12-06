import logo from "../logo-new.png";
import "../App.css";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer";
import Search from "../components/Search";
import "tailwindcss/tailwind.css";
import { useState } from "react";

const Userform = () => {
  const [mode, setMode] = useState(false);

  const handleClick = () => {
    setMode(!mode);
  };
  return (
    <div>
      <div className="text-center">

          <div
          className={
            mode
              ? "dark:bg-gray-800 w-auto p-6 shadow-xl transition duration-700 dark:text-white transition duration-700"
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
};

export default Userform;

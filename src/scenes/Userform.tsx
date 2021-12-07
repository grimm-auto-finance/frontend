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
      <div className="justify-cener items-center text-center">
        <div
          className={
            mode
              ? "bg-gray-800 shadow-xl pt-4 px-12 text-white transition duration-700"
              : "bg-gray-100 shadow-xl pt-4 px-12 text-gray-600 transition duration-700"
          }
        >
          <button
            className="rounded-lg py-2"
            onClick={handleClick}
          >
            {mode ? "🌙" : "☀️"}
          </button>
          <Navbar />
          <div >
            <Search />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Userform;

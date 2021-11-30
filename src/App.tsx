import "./App.css";
import "tailwindcss/tailwind.css";
import { BrowserRouter as BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Userform from "./scenes/userform"
import DashBoard from "./scenes/dashboard"
import { Car } from "./entities";

function App(){
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Userform />} />
          <Route path="/dashboard" element={<DashBoard />} />
          </Routes>
    </BrowserRouter>
  );
}
export default App;

import "tailwindcss/tailwind.css";

import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Userform from "./components/Userform";
import DashBoard from "./components/Dashboard";
import { useEffect } from "react";
import { isThemeDark, setTheme } from "./frameworks-and-drivers/theme";

/**
 * Function that runs the application when called
 * @constructor
 */
function App() {
  useEffect(() => {
    setTheme(isThemeDark());
  }, []);

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

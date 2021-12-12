import "tailwindcss/tailwind.css";

import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Userform from "./components/Userform";
import DashBoard from "./components/Dashboard";

/**
 * Function that runs the application when called
 * @constructor
 */
function App() {
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

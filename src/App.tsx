import "tailwindcss/tailwind.css";

import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Userform from "./scenes/Userform";
import DashBoard from "./scenes/Dashboard";

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

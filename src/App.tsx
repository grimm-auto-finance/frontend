import "tailwindcss/tailwind.css";

import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Userform from "./scenes/Userform";
import DashBoard from "./scenes/Dashboard";
import { Car } from "./entities";

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

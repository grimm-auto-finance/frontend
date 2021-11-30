import "./App.css";
import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Autofill from "./scenes/autofill"

function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={Autofill} />
          <Route path="/dashboard" component={DashBoard} />
      </div>
    </Router>
  );
}
export default App;

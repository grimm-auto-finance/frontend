import logo from "./logo-new.png";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./scenes/Dashboard";
import UserForm from "./components/UserForm";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Search from "./components/Search";
import "tailwindcss/tailwind.css";
import { AddOn, Car } from "./entities";

let map = new Map();
const marshmallows = new AddOn("Marshmallows", 5001, "This is a placeholder");
map.set(marshmallows.name, marshmallows);

function App() {
  return (
    <div className="App">
      <Dashboard car={new Car(0, 10000, "Honda", "Civic", 2002, 1, map)} />
    </div>
  );
}
export default App;

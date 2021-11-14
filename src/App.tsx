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

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}
export default App;

import logo from "./logo-new.png";

import "./App.css";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <LandingPage />
      </div>
      <div className="content">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <UserForm />
        </header>
        <Footer />
      </div>
    </div>
  );
}
export default App;

import logo from "../logo-new.png";
import "../App.css";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer";
import Search from "../components/Search";
import "tailwindcss/tailwind.css";

const Userform = () => {
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
          <Search />
        </header>
        <Footer />
      </div>
    </div>
  );
};

export default Userform;

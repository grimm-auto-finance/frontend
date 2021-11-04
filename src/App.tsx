import logo from "./logo-new.png";
<<<<<<< Updated upstream
import Honda from "./CarImages/Honda.png";
import Mercedes from "./CarImages/Mercedes.png";
import Ford from "./CarImages/Ford.png";
import Audi from "./CarImages/Audi.png";
import Car from "./CarImages/Car.png";
import Suzuki from "./CarImages/Suzuki.png";
=======
<<<<<<< Updated upstream
import Honda from "./car-images/Honda.png";
import Mercedes from "./car-images/Mercedes.png";
import Ford from "./car-images/Ford.png";
import Car from "./car-images/Car.png";
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes

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

import logo from "./logo-new.png";
import Honda from "./car-images/Honda.png";
import Mercedes from "./car-images/Mercedes.png";
import Ford from "./car-images/Ford.png";
import Car from "./car-images/Car.png";

import "./App.css";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {" "}
            GRIMM AUTO FINANCING <br />
            AUTO-FINANCING MADE EASY
          </p>

          <UserForm />

          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="./CarImages/Mercedes.png">
                <img
                  src={Mercedes}
                  alt="Cinque Terre"
                  width="512"
                  height="512"
                />
              </a>
              <div className="desc"> Mercedes SUV 2017</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="./CarImages/Car.png">
                <img src={Car} alt="Car" width="512" height="512" />
              </a>
              <div className="desc"> BMW something 2019</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="./CarImages/Suzuki.png">
                <img src={Honda} alt="Suzuki " width="1312" height="897" />
              </a>
              <div className="desc">Suzuki Pattern 2020 </div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="./CarImages/Ford.png">
                <img
                  src={Ford}
                  alt="Ford Focus 2016"
                  width="512"
                  height="512"
                />
              </a>
              <div className="desc">Ford Focus 2016</div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
export default App;

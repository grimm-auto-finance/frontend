import { useState } from "react";
import logo from "./logo-new.png";
import Honda from "./CarImages/Honda.png";
import Mercedes from "./CarImages/Mercedes.png";
import Ford from "./CarImages/Ford.png";
import Audi from "./CarImages/Audi.png";
import Car from "./CarImages/Car.png";
import Suzuki from "./CarImages/Suzuki.png";

import "./App.css";
import HelloAPI from "./components/HelloAPI";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {" "}
          GRIMM AUTO FINANCING <br />
          AUTO-FINANCING MADE EASY
        </p>
          <form>
          <label>Credit Score : </label>
          <input
            type="text"
            placeholder="Credit Score"
            name="CreditScore"
            required
          />

          <label> Budget : </label>
          <input
            type="password"
            placeholder="Enter Budget"
            name="budget"
            required
          />

          <label> Vehicle Model and Year : </label>
          <input
            type="text"
            placeholder="Enter Vehicle"
            name="Vehicle"
            required
          />

          <button type="submit">Enter</button>
        </form>

        <p>
          <a
            className="App-link"
            href="https://auto-loan-docs-service-daqxu6wc3q-nn.a.run.app/#/Rate/rate_create"
            target="_blank"
            rel="noopener noreferrer"
          >
            Senso API
          </a>
        </p>

        <p>
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
              <a target="_blank" href="./CarImages/car.png">
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
        </p>
        <HelloAPI />
      </header>
    </div>
  );
}

export default App;

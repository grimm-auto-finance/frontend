import React from "react";
import Github from "../CarImages/Github.png";

export default function Footer() {
  return (
    <footer className="relative bg-white pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto bg-white px-3 dark-gray-700">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">GRIMM AUTO FINANCE</h4>

            <h5 className="text-1xl text-gray-600 font-semibold">
              Technology Leadership Initative 2021 <br />
              University of Toronto, CSC207
            </h5>

            <h5 className="flex justify-center text-sm img-center text-left mx-auto text-blue-900 font-semibold">
              <a href="https://github.com/tli-group-4-grimm">
                <img src={Github} width="25" height="25" />
              </a>
            </h5>
            <h5 className="text-sm text-blue-900 font-semibold">
              <a href="https://opensource.org/licenses/MIT"> MIT License</a>
            </h5>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-6/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()} Gabe Guralnick, Ian Lavine,
              Mogtaba Alim, <br />
              Matthew Toohey, Rayan Awad Alim,{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

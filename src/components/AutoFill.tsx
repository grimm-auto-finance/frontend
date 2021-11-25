import { Car } from "../entities/Car";
import { useState } from "react";
import React, { Component } from "react";
// import React, { FC } from 'react';
import UserForm from "./UserForm";

interface Props {
  searchResults: Car[];
}

const AutoFill: React.FC<Props> = ({ searchResults }) => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(0);
  const [kilometres, setKilometres] = useState(0);
  const [price, setPrice] = useState(0);

  async function autoFill(carry: Car) {
    setMake(carry.make);
    setModel(carry.model);
    setYear(carry.year);
    setKilometres(carry.kilometres);
    setPrice(carry.price);
  }
  return (
    <div>
      {searchResults.map((car, i) => (
        <div className="bg-white m-4 border-2 rounded-md" key={i}>
          <button
            type="button"
            onClick={(input) => {
              const confirmBox = window.confirm(
                "Are you sure want an " +
                  String(car.model) +
                  " " +
                  String(car.make) +
                  " from " +
                  String(car.year)
              );
              if (confirmBox === true) {
                autoFill(car);
              }
            }}
          >
            {"$"}
            {car.price} {"-"} {car.year} {car.make} {car.model} {car.kilometres}{" "}
            {"kms"}
          </button>
        </div>
      ))}
      <UserForm
        make={make}
        model={model}
        year={year}
        price={price}
        kilometres={kilometres}
      />
    </div>
  );
};

export default AutoFill;

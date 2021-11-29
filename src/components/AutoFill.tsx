import { Car } from "../entities/Car";
import { useState } from "react";
import React, { Component } from "react";
// import React, { FC } from 'react';
import UserForm from "./UserForm";

interface Props {
  searchResults: Car[];
}

const AutoFill: React.FC<Props> = ({ searchResults }) => {
  const [car_, setCar] = useState<Car>();

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
                setCar(car);
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
        car_={car_}
      />
    </div>
  );
};

export default AutoFill;

import { Car } from "../entities/Car";
import { useState } from "react";
import React, { Component } from 'react';
import UserForm from "./UserForm";

interface IAutoFillProps {
    searchResults: Car[];
}

interface IAutoFillState {
}


class AutoFill extends Component<IAutoFillProps, IAutoFillState> {

    render() {
        const [make, setMake] = useState("");
        const [model, setModel] = useState("");
        const [year, setYear] = useState("");

        async function autoFill(carry: Car) {
            setMake(carry.make)
            setModel(carry.model)
            setYear(String(carry.year))
        }

        return (
            <div className="m-4 mb-8">
                {this.props.searchResults.map((car, i) => (
                    <div className="bg-white m-4 border-2 rounded-md" key={i}>
                    <button 
                        type="button"
                        onClick={(input) => {
                            const confirmBox = window.confirm(
                                "Are you sure want an " +  String(car.model) + " " + String(car.make) + " from " + String(car.year)
                            )
                            if (confirmBox === true) {
                                autoFill(car)
                            }
                            }}
                            >
                            {car.year} {car.make} {car.model}
                    </button>
                </div>
                ))}
                <UserForm make={make} model={model} year={year} />
            </div>
        );
    };
}

export default AutoFill
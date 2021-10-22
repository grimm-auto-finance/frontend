import { useState} from "react";

const UserForm = () => {
    const [creditScore, setCreditScore] = useState(NaN);
    const [pytBudget, setpytBudget] = useState(NaN);
    const [vehicleMake, setvehicleMake] = useState('');
    const [vehicleModel, setvehicleModel] = useState('');
    const [vehicleYear, setvehicleYear] = useState(NaN);
    const [vehicleKms, setvehicleKms] = useState(NaN);
    const [vehiclePrice, setvehiclePrice] = useState(NaN);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const UserInfo = {creditScore,
            pytBudget};
        const CarInfo = {
            vehicleMake,
            vehicleModel,
            vehicleYear,
            vehicleKms };
        const fullInfo = {"car buyer": UserInfo, "car": CarInfo};

        fetch(import.meta.env.VITE_BACKEND_BASE_URL + '/loan', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(UserInfo)
        }).then(() => {console.log(UserInfo)
        })
    }

    return (
        <div className="UserForm">
            <form onSubmit={handleSubmit}>

                <label>Credit Score : </label>
                <input
                id = "Credit Score"
                type="number"
                placeholder="Credit Score"
                name="creditScore"
                value={creditScore}
                onChange={(input) =>
                    setCreditScore(parseInt(input.target.value))}
                required
                />

                <label> Budget : </label>
                <input
                id = "Budget"
                type="number"
                placeholder="Enter Budget"
                name="pytBudget"
                value={pytBudget}
                onChange={(input) =>
                    setpytBudget(parseFloat(input.target.value))}
                required
                />

                <label> Vehicle Make: </label>
                <input
                    id = "Make"
                    type="text"
                    placeholder="Enter Vehicle Make"
                    name="vehicleMake"
                    value={vehicleMake}
                    onChange={(input) =>
                        setvehicleMake(input.target.value)}
                    required
                />

                <label> Vehicle Model: </label>
                <input
                    id = "Model"
                    type="text"
                    placeholder="Enter Vehicle Model"
                    name="vehicleModel"
                    value={vehicleModel}
                    onChange={(input) =>
                        setvehicleModel(input.target.value)}
                    required
                />

                <label> Vehicle Year: </label>
                <input
                    id = "Year"
                    type="number"
                    placeholder="Enter Vehicle Year"
                    name="vehicleYear"
                    value={vehicleYear}
                    onChange={(input) =>
                        setvehicleYear(parseInt(input.target.value))}
                    required
                />

                <label> Vehicle Distance Driven (KMs): </label>
                <input
                    id = "Distance Driven"
                    type="number"
                    placeholder="Enter Distance Driven"
                    name="vehicleKms"
                    value={vehicleKms}
                    onChange={(input) =>
                        setvehicleKms(parseFloat(input.target.value))}
                    required
                />

                <label>Vehicle Price: </label>
                <input
                    id = "Price"
                    type="number"
                    placeholder="vehiclePrice"
                    name="vehiclePrice"
                    value={vehiclePrice}
                    onChange={(input) =>
                        setvehiclePrice(parseFloat(input.target.value))}
                    required
                />



                <button type="submit">Enter</button>
            </form>
        </div>
    );
}

export default UserForm;

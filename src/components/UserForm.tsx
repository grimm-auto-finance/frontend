import { useState} from "react";

const UserForm = () => {
    const [creditScore, setCreditScore] = useState('');
    const [pytBudget, setpytBudget] = useState('');
    const [vehicleMake, setvehicleMake] = useState('');
    const [vehicleModel, setvehicleModel] = useState('');
    const [vehicleYear, setvehicleYear] = useState('');
    const [vehicleKms, setvehicleKms] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const UserInfo = {creditScore,
            pytBudget,
            vehicleMake,
            vehicleModel,
            vehicleYear,
            vehicleKms};

        fetch('/loan', {
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
                type="text"
                placeholder="Credit Score"
                name="creditScore"
                value={creditScore}
                onChange={(input) => setCreditScore(input.target.value)}
                required
                />

                <label> Budget : </label>
                <input
                id = "Budget"
                type="text"
                placeholder="Enter Budget"
                name="pytBudget"
                value={pytBudget}
                onChange={(input) => setpytBudget(input.target.value)}
                required
                />

                <label> Vehicle Make: </label>
                <input
                    id = "Make"
                    type="text"
                    placeholder="Enter Vehicle Make"
                    name="vehicleMake"
                    value={vehicleMake}
                    onChange={(input) => setvehicleMake(input.target.value)}
                    required
                />

                <label> Vehicle Model: </label>
                <input
                    id = "Model"
                    type="text"
                    placeholder="Enter Vehicle Model"
                    name="vehicleModel"
                    value={vehicleModel}
                    onChange={(input) => setvehicleModel(input.target.value)}
                    required
                />

                <label> Vehicle Year: </label>
                <input
                    id = "Year"
                    type="text"
                    placeholder="Enter Vehicle Year"
                    name="vehicleYear"
                    value={vehicleYear}
                    onChange={(input) => setvehicleYear(input.target.value)}
                    required
                />

                <label> Vehicle Distance Driven (KMs): </label>
                <input
                    id = "Distance Driven"
                    type="text"
                    placeholder="Enter Distance Driven"
                    name="vehicleKms"
                    value={vehicleKms}
                    onChange={(input) => setvehicleKms(input.target.value)}
                    required
                />


                <button type="submit">Enter</button>
            </form>
        </div>
    );
}


function info() {
    let pytBudget;
    let creditScore;
    let vehicleMake;
    let vehicleModel;
    let vehicleKms;
    let vehicleYear;

    creditScore = Number(document.getElementsByName("creditScore"));
    pytBudget = Number(document.getElementsByName("pytBudget"));
    vehicleMake = String(document.getElementsByName("vehicleMake"));
    vehicleModel = String(document.getElementsByName("vehicleModel"));
    vehicleYear = Number(document.getElementsByName("vehicleYear"));
    vehicleKms = Number(document.getElementsByName("vehicleKms"));

    let infomap = [creditScore, pytBudget, vehicleMake, vehicleModel, vehicleYear, vehicleKms];
    return(infomap);

}

function jsonparser() {
    let infomap = info();
    let infostring = ["creditScore", "pytBudget", "vehicleMake", "vehicleModel", "vehicleYear", "vehicleKms"]

    let jsonString = "{\n" +
        "    “car”: {    “make”: "+ String(infomap[2]) +", “model”: " + String(infomap[3]) +", “year”: "+ String(infomap[4]) +"},\n" +
        "    “car buyer”: {“budget”: "+ String(infomap[1]) +", “credit score”: "+ String(infomap[0]) +"}\n" +
        "}";
    const jsonObj = JSON.parse(jsonString)

    console.log(infomap)

    return(jsonObj)


}

export default UserForm;
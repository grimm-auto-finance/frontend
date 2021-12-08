import { Car, CarBuyer, AddOn, LoanData } from "../entities";
import AddOnBox from "./AddOnBox";
import fetchLoanData from "../use-cases/fetchLoanData";

function AddOnContainer(props: {
  car: Car | null;
  carBuyer: CarBuyer | null;
  addOns: AddOn[] | null;
  searchString: string | null;
  setSearchString: (s: string) => void;
  setLoanData: (c: LoanData) => void;
}) {
  const car = props.car;
  const carBuyer = props.carBuyer;
  const addOns = props.addOns;
  const searchString = props.searchString;

  return (
    <div className="shadow-xl z-10 p-4 flex flex-col gap-4 w-1/4 overflow-y-scroll">
      <div className="text-center mt-4 text-2xl font-semibold">
        Available Add-Ons{" "}
      </div>
      <div className=" bg-blue-700 text-white text-center p-2 rounded mt-4">
        Add-Ons Budget{" "}
      </div>

      <input
        type="search"
        placeholder="Search"
        className="border-4 rounded p-2 border-blue-400 hover:border-blue-200"
        onChange={async (event) => {
          props.setSearchString(event.target.value);
        }}
      />
      {car !== null && carBuyer !== null && addOns !== null
        ? (searchString === null
            ? [...addOns.values()]
            : [...addOns.values()].filter(
                (a) =>
                  a
                    .toString()
                    .toLowerCase()
                    .indexOf(searchString.toLowerCase()) !== -1
              )
          ).map((a, i) => {
            return (
              <AddOnBox
                key={i}
                addOn={a}
                onAdd={async (addOn: AddOn) => { {
                  try {
                    let res = await fetchLoanData(carBuyer, car);
                    car.addOns.set(addOn.name, addOn);
                    props.setLoanData(res);
                  } catch (error) {
                    window.alert("There was a problem with the database: " + error)
                  }}
                }}
                onRemove={async (addOn: AddOn) => {
                  {
                    try {
                      let res = await fetchLoanData(carBuyer, car);
                      car.addOns.delete(addOn.name);
                      props.setLoanData(res);
                    } catch (error) {
                      window.alert("There was a problem with the database: " + error)
                    }}
                }}
              />
            );
          })
        : []}
    </div>
  );
}

export default AddOnContainer;

import { Car, CarBuyer, AddOn, LoanData } from "../entities";
import AddOnBox from "./AddOnBox";
import fetchLoanData from "../use-cases/fetchLoanData";

/**
 * Initalizes the information needed to allow the user to select addons by getting it from the userform and from the
 * call of the addons route
 * @param props The properties needed to obtain the addons be it from the userform like the customer information or
 * the car info from the search or the loan data from the laon route, and lastly the search input from the user in the
 * dashboard to choose the wanted addons
 * @constructor
 */
function AddOnContainer(props: {
  car: Car | null;
  carBuyer: CarBuyer | null;
  addOns: AddOn[] | null;
  loanData: LoanData | null;
  searchString: string | null;
  setSearchString: (s: string) => void;
  setLoanData: (c: LoanData) => void;
}) {
  const car = props.car;
  const carBuyer = props.carBuyer;
  const addOns = props.addOns;
  const searchString = props.searchString;
  const loanData = props.loanData;

  return (
    <div className="shadow-xl z-10 p-4 flex flex-col gap-4 w-1/4 overflow-y-scroll">
      <div className="text-center mt-4 text-2xl font-semibold">
        Available Add-Ons{" "}
      </div>
      <div className=" bg-blue-700 text-white text-center p-2 rounded mt-4">
        Add-Ons Budget{" "}
        <div className="text-white-900">
          {"$"}
          {loanData?.addOnBudget}
        </div>
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
                  a.name
                    .toString()
                    .toLowerCase()
                    .indexOf(searchString.toLowerCase()) !== -1
              )
          ).map((a, i) => {
            return (
              <AddOnBox
                key={i}
                addOn={a}
                onAdd={async (addOn: AddOn) => {
                  car.addOns.set(addOn.name, addOn);
                  props.setLoanData(await fetchLoanData(carBuyer, car));
                }}
                onRemove={async (addOn: AddOn) => {
                  car.addOns.delete(addOn.name);
                  props.setLoanData(await fetchLoanData(carBuyer, car));
                }}
              />
            );
          })
        : []}
    </div>
  );
}

export default AddOnContainer;

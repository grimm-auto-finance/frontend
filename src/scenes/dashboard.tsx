import AddOnBox from "../components/AddOnBox"; 
import Mercedes from "../car-images/Mercedes.png";
import { Car } from "../entities";
import { mdiCog, mdiArrowLeft, mdiAccountOutline } from "@mdi/js";

let searchString = "";
let addOns = [];

function Dashboard(props: { car: Car }) {
  return (
    <div className="flex h-screen">
      <div className="bg-gray-200 shadow-xl z-10 p-4 flex flex-col gap-4">
        <div className="text-2xl font-semibold">Available Add-Ons</div>
        <div className="bg-red-400 p-2 rounded mt-8">Add-Ons Budget</div>
        <input
          type="search"
          placeholder="Search"
          className="border-4 rounded p-2 border-red-400"
          onChange={async (event) => {
            searchString = event.target.value;
          }}
        />
        {[...props.car.addOns.values()].map((a, i) => {
          return <AddOnBox key={i} addOn={a} />;
        })}
      </div>
      <div className="flex-grow bg-white flex flex-col">
        <div className="bg-red-300 shadow-lg h-16 flex justify-between">
          <button className="h-full hover:drop-shadow-2xl transition hover:opacity-80 text-white">
            <svg
              viewBox="0 0 24 24"
              className="h-full fill-current p-3 inline-block"
            >
              <path d={mdiArrowLeft} />
            </svg>
            <span className="inline-block">Back To Cars</span>
          </button>
          <div className="flex gap-4">
            <button className="bg-blue-300 rounded-3xl shadow-xl hover:shadow-2xl transition h-auto my-3 text-sm text-blue-900 hover:opacity-100 px-3">
              <svg
                viewBox="0 0 24 24"
                className="text-white fill-current hover:drop-shadow-2xl transition inline-block pr-3 w-10 text-current"
              >
                <path d={mdiAccountOutline} />
              </svg>
              <span className="inline-block">Edit Buyer Information</span>
            </button>
            <button className="bg-red-500 h-full w-12 transition">
              <svg
                viewBox="0 0 24 24"
                className="text-white fill-current p-3 hover:drop-shadow-2xl transition inline-block w-12"
              >
                <path d={mdiCog} />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-grow flex justify-around px-16 py-8">
          <div className="max-w-screen-md flex flex-col">
            <div className="flex-grow-0 flex-shrink text-5xl font-rounded font-semibold">
              {props.car.make} {props.car.model} {props.car.year}
            </div>
            <img className="w-3/4 m-auto" src={Mercedes} />
            <div className="bg-blue-50 rounded-lg text-2xl font-semibold flex justify-between p-4">
              <div className="font-rounded">SENSO Score</div>
              <div className="text-blue-900">Very High</div>
            </div>
            <div className="flex pt-4 gap-4">
              <div className="flex-grow flex flex-col gap-4">
                <div className="bg-blue-50 rounded-lg text-2xl font-semibold py-4 px-8 text-left">
                  <div className="font-rounded">Loan Amount</div>
                  <div className="text-blue-900">CAD $24,560</div>
                </div>
                <div className="bg-blue-50 rounded-lg text-2xl font-semibold py-4 px-8 text-left">
                  <div className="font-rounded">Term</div>
                  <div className="text-blue-900">36 Months</div>
                </div>
              </div>
              <div className="flex-grow flex flex-col gap-4">
                <div className="bg-blue-50 rounded-lg text-2xl font-semibold py-4 px-8 text-left">
                  <div className="font-rounded">Interest Rate</div>
                  <div className="text-blue-900">16.5%</div>
                </div>
                <div className="bg-blue-50 rounded-lg text-2xl font-semibold py-4 px-8 text-left">
                  <div className="font-rounded">Amount Down</div>
                  <div className="text-blue-900">5,000</div>
                </div>
              </div>
            </div>
            <button className="bg-red-400 rounded-3xl shadow-xl hover:shadow-2xl transition h-auto my-3 text-2xl text-white hover:opacity-100 px-3 py-1 mx-auto">
              Finalize Sale
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

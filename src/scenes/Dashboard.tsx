import StatBox from "../components/StatBox";
import AddOnBox from "../components/AddOnBox";
import { AddOn } from "../entities";
import { mdiCog, mdiArrowLeft } from "@mdi/js";

let searchString = "";
let addOns = [new AddOn("Marshamllows", "This is a placeholder", 5001)];

function Dashboard() {
  return (
    <div className="flex h-screen">
      <div className="bg-gray-200 shadow-xl z-10 p-4 flex flex-col gap-4">
        <div className="text-2xl font-semibold">Add-Ons</div>
        <div className="bg-red-400 p-2 rounded mt-8">Add-Ons Budget</div>
        <input
          type="search"
          placeholder="Search"
          className="border-4 rounded p-2 border-red-400"
          onChange={async (event) => {
            searchString = event.target.value;
          }}
        />
        {addOns.map((a, i) => {
          return <AddOnBox key={i} addOn={a} />;
        })}
      </div>
      <div className="flex-grow bg-white">
        <div className="bg-red-300 shadow-lg h-16 flex justify-between">
          <button className="h-full hover:drop-shadow-2xl transition hover:opacity-80 text-white">
            <svg
              viewBox="0 0 24 24"
              className="h-full fill-current p-3 inline-block"
            >
              <path d={mdiArrowLeft} />
            </svg><span className="inline-block">Back to cars</span>
          </button>
          <button className="hover:opacity-100 bg-red-500 h-full">
            <svg
              viewBox="0 0 24 24"
              className="text-white fill-current p-3 hover:drop-shadow-2xl transition hover:opacity-80"
            >
              <path d={mdiCog} />
            </svg>
          </button>
        </div>
        <div className="flex-grow">Body</div>
      </div>
    </div>
  );
}

export default Dashboard;

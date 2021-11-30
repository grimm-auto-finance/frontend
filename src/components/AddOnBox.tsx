import { useState, useEffect } from "react";
import { AddOn } from "../entities";
import { mdiChevronRight, mdiPlusCircle } from "@mdi/js";

function AddOnBox(props: { addOn: AddOn }) {
  const [expanded, setExpanded] = useState(false);

  let chevronClassName =
    "transition fill-current w-6 inline-block" + (expanded ? " rotate-90" : "");

  return (
    <div className="w-full text-blueGray-800 border-2 border-blueGray-800 rounded-lg p-1 text-left">
      <div className="flex gap-2 ">
        <button
          className="h-full hover:drop-shadow-2xl transition hover:opacity-80"
          onClick={() => setExpanded(!expanded)}
        >
          <svg viewBox="0 0 24 24" className={chevronClassName}>
            <path d={mdiChevronRight} />
          </svg>
        </button>
        <div className="">{props.addOn.name}</div>
        <div className="flex-grow" />
        <div>${props.addOn.price}</div>
        <button className="bg-blue-300 rounded-3xl shadow-xl hover:shadow-2xl transition h-auto text-sm text-blue-900 hover:opacity-100 px-2 whitespace-nowrap">
          <svg
            viewBox="0 0 24 24"
            className="text-white fill-current hover:drop-shadow-2xl transition inline-block w-4 text-current"
          >
            <path d={mdiPlusCircle} />
          </svg>
          <span className="inline-block">Add</span>
        </button>
      </div>
      {expanded && props.addOn.description}
    </div>
  );
}

export default AddOnBox;
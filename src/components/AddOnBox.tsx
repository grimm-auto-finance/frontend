import { useState, useEffect } from "react";
import { AddOn } from "../entities";
import { mdiChevronRight, mdiMinusCircle, mdiPlusCircle } from "@mdi/js";

function AddOnBox(props: {
  addOn: AddOn;
  onAdd: (addOn: AddOn) => void;
  onRemove: (addOn: AddOn) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [added, setAdded] = useState(false);

  let chevronClassName =
    "transition fill-current w-6 inline-block" + (expanded ? " rotate-90" : "");

  return (
    <div
      className="shadow-md tab w-full
     overflow-y-auto border-t w-full
     border-0 border-t-8 hover:border-blue-800
     rounded-sm p-8 text-left"
    >
      <div className="">
        <div className="flex gap-2 ">
          <button
            className="h-full hover:drop-shadow-2xl transition hover:opacity-80"
            onClick={() => setExpanded(!expanded)}
          >
            <svg viewBox="0 0 24 24" className={chevronClassName}>
              <path d={mdiChevronRight} />
            </svg>
          </button>

          <div className="truncate flex-grow">{props.addOn.name}</div>
          <div className="flex-grow" />
          <div>${props.addOn.price}</div>
          {/* TODO: Improve wrapping when size is small here */}

          <button
            className="bg-blue-500 pl-2 inline-block rounded-3xl shadow-xl hover:shadow-2xl transition h-auto text-sm hover:opacity-100 px-2 whitespace-nowrap"
            onClick={() => {
              if (added) {
                props.onRemove(props.addOn);
              } else {
                props.onAdd(props.addOn);
              }
              setAdded(!added);
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className="text-white fill-current hover:drop-shadow-2xl transition inline-block w-4 text-current"
            >
              <path d={added ? mdiMinusCircle : mdiPlusCircle} />
            </svg>
            <span className="inline-block">{added ? "Remove" : "Add"}</span>
          </button>
        </div>
      </div>
      {expanded && props.addOn.description}
    </div>
  );
}

export default AddOnBox;

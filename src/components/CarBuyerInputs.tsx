import React from "react";

interface calls {
  onCreditChange(op: number): any;
  onBudgetChange(op: number): any;
  onDownpaymentChange(op: number): any;
}

/**
 * Constructs the properties needed to be stored from the user personal info input
 */
class CarBuyerInputs extends React.Component<calls, {}> {
  constructor(props: any) {
    super(props);
    this.props.onCreditChange(Math.floor(Math.random() * (900 - 400) + 400));
  }

  render() {
    return (
      <div className="justify-center pt-4">
        <form className=" w-auto">
          <div className="flex justify-center rounded border-0 border-t-4 border-b-4 hover:border-blue-800 mb-8 m-4 h-auto">
            <div className="flex items-center inline bg-gray-200 py-2 px-4 text-gray-600 select-none">
              $
            </div>
            <label className="flex items-center bg-transparent py-1 px-4 focus:outline-none p-30 m-4 p-6">
              {" "}
              Monthly Budget:{" "}
            </label>
            <input
              className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-full"
              id="Budget"
              type="number"
              onKeyDown={(evt) => evt.key === "e" && evt.preventDefault()}
              placeholder="Enter Budget"
              name="pytBudget"
              onChange={(input) =>
                this.props.onBudgetChange(parseFloat(input.target.value))
              }
              required
            />
            <div className="flex items-center inline bg-gray-200 py-2 px-4 text-gray-600 select-none">
              .00
            </div>
          </div>

          <div className="flex justify-center rounded border-0 border-t-4 border-b-4 hover:border-blue-800 mb-8 m-4 h-auto">
            <div className="flex items-center inline bg-gray-200 py-2 px-4 text-gray-600 select-none">
              $
            </div>
            <label className="flex items-center bg-transparent py-1  px-4 focus:outline-none p-30 m-4 p-6">
              Down Payment:{" "}
            </label>
            <input
              className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-full"
              id="downpayment"
              type="number"
              onKeyDown={(evt) => evt.key === "e" && evt.preventDefault()}
              step={0.01}
              placeholder="Down Payment"
              name="downpayment"
              onChange={(input) =>
                this.props.onDownpaymentChange(parseFloat(input.target.value))
              }
              required
            />
            <div className="flex items-center inline bg-gray-200 py-4 px-4 text-gray-600 select-none">
              .00
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CarBuyerInputs;

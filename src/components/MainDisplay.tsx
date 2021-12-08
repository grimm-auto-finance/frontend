import { Car, CarBuyer, LoanData } from "../entities";
import Mercedes from "../car-images/Mercedes.png";

function MainDisplay(props: {
  car: Car | null;
  loanData: LoanData | null;
  carBuyer: CarBuyer | null;
}) {
  const car = props.car;
  const loanData = props.loanData;
  const carBuyer = props.carBuyer;

  function sensoInterpretation(sensoScore: String) {
    const SensMap = new Map();
    SensMap.set("VERY LOW", "1% - 20%");
    SensMap.set("LOW", "21% - 40%");
    SensMap.set("MEDIUM", "41% - 60%");
    SensMap.set("HIGH", "61% - 80%");
    SensMap.set("VERY HIGH", "81% - 100%");
    return SensMap.get(sensoScore);
  }

  if (car !== null && loanData !== null) {
    return (
      <div className="flex flex-col justify-between w-full">
        <div className="flex-grow-0 text-center flex-shrink text-5xl font-rounded font-semibold">
          {car.make} {car.model} {car.year}
        </div>
        {/* TODO: Add respective image of car from databse */}

        <img className="max-w-xs mx-auto" src={Mercedes} />
        <div className="bg-blue-300 border-0 border-b-8 hover:border-indigo-500 rounded-lg text-2xl font-semibold flex justify-between p-4">
          <div className="font-rounded ml-8">SENSO Score</div>
          <div className="text-blue-900 mr-8">
            {sensoInterpretation(loanData.sensoScore)}
          </div>
        </div>
        <div className="flex pt-4 gap-4">
          <div className="flex-grow flex flex-col gap-4">
            <div className="bg-blue-300 border-0 border-b-8 border-green-500 rounded-lg text-2xl font-semibold py-4 px-8 text-left">
              <div className="font-rounded">Loan Amount</div>
              <div className="text-green-600">CAD ${loanData.amount}</div>
            </div>
            <div className="bg-blue-300 border-0 border-b-8 border-yellow-500 rounded-lg text-2xl font-semibold py-4 px-8 text-left">
              <div className="font-rounded">Term</div>
              <div className="text-blue-900">{loanData.term} Months</div>
            </div>
          </div>
          <div className="flex-grow flex flex-col gap-4">
            <div className="bg-blue-300 border-0 border-b-8 border-indigo-700 rounded-lg text-2xl font-semibold py-4 px-8 text-left">
              <div className="font-rounded">Interest Rate</div>
              <div className="text-blue-900">{loanData.interestRate}%</div>
            </div>
            <div className="bg-blue-300 border-0 border-b-8 border-red-700 rounded-lg text-2xl font-semibold py-4 px-8 text-left">
              <div className="font-rounded">Amount Down</div>
              <div className="text-blue-900">
                {"$"}
                {carBuyer?.downpayment}
              </div>
            </div>
          </div>
        </div>
        <button className="bg-blue-700 border-0 border-l-8 hover:border-gray-400 rounded-sm shadow-xl hover:shadow-2xl transition h-auto my-3 text-2xl text-white hover:opacity-100 px-3 py-1 mx-auto">
          Finalize Sale
        </button>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default MainDisplay;

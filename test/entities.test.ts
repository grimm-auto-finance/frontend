import { AddOn, Car, CarBuyer, LoanData } from "../src/entities";

describe("Add On", () => {
  let addOn: AddOn;

  beforeEach(() => {
    addOn = new AddOn("Marshmallows", 5.59, "Very Tasty");
  });

  it("can be created from the constructor", () => {
    expect(addOn.name).toBe("Marshmallows");
    expect(addOn.price).toBe(5.59);
    expect(addOn.description).toBe("Very Tasty");
  });

  it("can be created from and stringified to JSON", () => {
    const jsonAddOn = JSON.stringify(addOn);
    expect(AddOn.from(JSON.parse(jsonAddOn))).toStrictEqual(addOn);
  });
});

describe("Car", () => {
  let car: Car;
  const addOn = new AddOn("Marshmallows", 5.59, "Very Tasty");

  it("can be created from the constructor", () => {
    car = new Car(
      50000,
      10000,
      "Honda",
      "Civic",
      "image",
      2002,
      5,
      new Map([[addOn.name, addOn]])
    );

    expect(car.kilometres).toBe(50000);
    expect(car.price).toBe(10000);
    expect(car.make).toBe("Honda");
    expect(car.model).toBe("Civic");
    expect(car.image).toBe("image");
    expect(car.year).toBe(2002);
    expect(car.addOns).toStrictEqual(new Map([[addOn.name, addOn]]));
    expect(car.id).toBe(5);
  });

  it("can be created from the constructor without add-ons", () => {
    car = new Car(50000, 10000, "Honda", "Civic", "image", 2002, 5);

    expect(car.kilometres).toBe(50000);
    expect(car.price).toBe(10000);
    expect(car.make).toBe("Honda");
    expect(car.model).toBe("Civic");
    expect(car.image).toBe("image");
    expect(car.year).toBe(2002);
    expect(car.id).toBe(5);
    expect(car.addOns).toStrictEqual(new Map());
  });

  it("can be created from and stringified to JSON", () => {
    car = new Car(
      50000,
      10000,
      "Honda",
      "Civic",
      "image",
      2002,
      5,
      new Map([[addOn.name, addOn]])
    );

    const jsonCar = JSON.stringify(car);
    expect(Car.from(JSON.parse(jsonCar))).toStrictEqual(car);
  });

  it("can be created from and stringified to JSON without add-ons", () => {
    car = new Car(50000, 10000, "Honda", "Civic", "image", 2002, 5);

    const jsonCar = JSON.stringify(car);
    expect(Car.from(JSON.parse(jsonCar))).toStrictEqual(car);
  });
});

describe("Car Buyer", () => {
  let carBuyer: CarBuyer;

  beforeEach(() => {
    carBuyer = new CarBuyer(10000, 600, 3000);
  });

  it("can be created from the constructor", () => {
    expect(carBuyer.budget).toBe(10000);
    expect(carBuyer.creditScore).toBe(600);
    expect(carBuyer.downpayment).toBe(3000);
  });

  it("can be created from and stringified to JSON", () => {
    const jsonCarBuyer = JSON.stringify(carBuyer);
    expect(CarBuyer.from(JSON.parse(jsonCarBuyer))).toStrictEqual(carBuyer);
  });
});

describe("Loan Data", () => {
  let loanData: LoanData;

  beforeEach(() => {
    loanData = new LoanData(1.25, 500, "Very Low", 10000, 36, 2000);
  });

  it("can be created from the constructor", () => {
    expect(loanData.interestRate).toBe(1.25);
    expect(loanData.installment).toBe(500);
    expect(loanData.sensoScore).toBe("Very Low");
    expect(loanData.amount).toBe(10000);
    expect(loanData.term).toBe(36);
    expect(loanData.interestSum).toBe(2000);
  });

  it("can be created from and stringified to JSON", () => {
    const jsonLoanData = JSON.stringify(loanData);
    expect(LoanData.from(JSON.parse(jsonLoanData))).toStrictEqual(loanData);
  });
});

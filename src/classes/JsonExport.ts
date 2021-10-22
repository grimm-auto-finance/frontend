import {Car} from "./Car";
import {CarBuyer} from "./CarBuyer";

function getCar(excar: Car, exbuyer: CarBuyer) {
    return {"car": excar.getCar(), "car buyer": exbuyer.getCarBuyer()};
}
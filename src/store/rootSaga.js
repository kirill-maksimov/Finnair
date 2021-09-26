import { all } from "redux-saga/effects";
import tableSagas from "../table/table.saga";
import filterSagas from "../flihgts/flights.saga";

export default function* rootSaga() {
  yield all([
    tableSagas(),
    filterSagas(),
  ]);
}

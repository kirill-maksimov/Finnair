import { put, takeEvery, all } from 'redux-saga/effects';
import {
  GET_FLIGHTS,
  GET_FLIGHTS_SUCCESS,
  GET_FLIGHTS_ERROR,
} from '../consts/actions-types';
import { getFlightsData } from '../consts/flights-data';

export function* getFlightsSaga() {
  try {
    // here should be a call for getting the data
    // const response = yield call(axios.get, 'http://api.finnair.com/flightData.json');
    const response = getFlightsData();
    yield put({ type: GET_FLIGHTS_SUCCESS, response });
  } catch (error) {
    console.error(error);
    yield put({ type: GET_FLIGHTS_ERROR, error });
  }
}

export default function* tableSagas() {
  yield all([takeEvery(GET_FLIGHTS, getFlightsSaga)]);
}

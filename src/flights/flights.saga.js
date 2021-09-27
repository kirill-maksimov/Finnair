import { put, takeEvery, all } from 'redux-saga/effects';
import {
  UPDATE_FLIGHTS,
  UPDATE_FLIGHTS_SUCCESS,
  UPDATE_FLIGHTS_ERROR,
} from '../consts/actions-types';

export function* updateFlightsSaga(action) {
  try {
    // here should be a call for updating the data
    const response = action;
    yield put({ type: UPDATE_FLIGHTS_SUCCESS, response });
  } catch (error) {
    console.error(error);
    yield put({ type: UPDATE_FLIGHTS_ERROR, error });
  }
}

export default function* filterSagas() {
  yield all([takeEvery(UPDATE_FLIGHTS, updateFlightsSaga)]);
}

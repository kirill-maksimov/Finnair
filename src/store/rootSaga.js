import { all } from 'redux-saga/effects';
import tableSagas from '../table/table.saga';
import filterSagas from '../flights/flights.saga';

export default function* rootSaga() {
  yield all([tableSagas(), filterSagas()]);
}

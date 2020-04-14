import { put, takeLatest, all } from 'redux-saga/effects';
import { REQUEST_SUCCEDED, REQUESTING_DATA } from '../actions/types';

const FETCH_URL = 'https://jsonplaceholder.typicode.com/users';

function* fetchPersons() {
  const json = yield fetch(FETCH_URL).then((res) => res.json());

  yield put({ type: REQUESTING_DATA, persons: json });
}

function* actionWatcher() {
  yield takeLatest(REQUEST_SUCCEDED, fetchPersons);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}

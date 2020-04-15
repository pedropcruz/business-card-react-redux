import { put, takeEvery, call, all } from 'redux-saga/effects';

import { REQUESTING_DATA } from '../constants';

import { receiveData } from '../actions';

import fetchData from '../api';

function* handleRequest(action) {
  try {
    const data = yield call(fetchData);
    yield put(receiveData({ persons: data }));
  } catch (e) {
    console.error(e);
  }
}

function* rootSaga() {
  yield all([takeEvery(REQUESTING_DATA, handleRequest)]);
}

export default rootSaga;

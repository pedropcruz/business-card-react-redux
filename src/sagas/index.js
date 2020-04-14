import { put, takeLatest, call, all } from 'redux-saga/effects';

import {
  REQUESTING_DATA,
  REQUEST_SUCCEDED,
  SEARCH_PERSON,
} from '../actions/types';

import { requestData, receiveData, requestFailed } from '../actions';

import fetchData from '../api';

function* handleRequest(action) {
  try {
    const data = yield call(fetchData);
    yield put(receiveData(data));
  } catch (e) {
    console.error(e);
  }
}

function* rootSaga() {
  yield takeLatest(REQUESTING_DATA, handleRequest);
}

export default rootSaga;

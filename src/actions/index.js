import { REQUESTING_DATA, REQUEST_SUCCEDED, SEARCH_PERSON } from '../constants';

export const requestData = (payload) => ({
  type: REQUESTING_DATA,
  payload,
});

export const receiveData = (payload) => ({
  type: REQUEST_SUCCEDED,
  payload,
});

export const search = (payload) => ({
  type: SEARCH_PERSON,
  payload,
});

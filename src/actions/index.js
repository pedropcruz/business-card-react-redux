import { REQUESTING_DATA, REQUEST_SUCCEDED, SEARCH_PERSON } from './types';

export const requestData = () => ({
  type: REQUESTING_DATA,
  fetching: true,
});

export const receiveData = (persons) => ({
  type: REQUEST_SUCCEDED,
  fetching: false,
  persons,
});

export const search = (persons) => ({
  type: SEARCH_PERSON,
  fetching: false,
  persons,
});

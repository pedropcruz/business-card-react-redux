import { REQUESTING_DATA, REQUEST_SUCCEDED } from '../actions/types';

const defaultState = {
  fetching: false,
  persons: [],
};

const reducers = (state = defaultState, { type, persons }) => {
  switch (type) {
    case REQUESTING_DATA:
      return { fetching: true, persons: [] };
    case REQUEST_SUCCEDED:
      return { fetching: false, persons };
    default:
      return state;
  }
};

export default reducers;

import {
  REQUESTING_DATA,
  REQUEST_SUCCEDED,
  SEARCH_PERSON,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return { fetching: true, persons: [] };
    case REQUEST_SUCCEDED:
      return { fetching: false, persons: action.persons };
    case SEARCH_PERSON:
      return { fetching: false, persons: action.persons };
    default:
      return state;
  }
};

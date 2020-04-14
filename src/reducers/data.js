import { REQUESTING_DATA, REQUEST_SUCCEDED, SEARCH_PERSON } from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return { fetching: true, persons: [] };
    case REQUEST_SUCCEDED:
      return {
        fetching: false,
        persons: action.payload.persons,
        filtered: action.payload.persons,
      };
    case SEARCH_PERSON: {
      const { persons } = state;
      const { query } = action.payload;

      const filteredValues = persons.filter(({ name }) =>
        name.toLowerCase().includes(query.toLowerCase())
      );

      return { ...state, fetching: false, filtered: filteredValues };
    }
    default:
      return state;
  }
};

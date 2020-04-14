import { REQUESTING_DATA, REQUEST_SUCCEDED } from '../types.js';

export const requestData = () => ({
  type: REQUESTING_DATA,
});

export const requestSucceed = () => ({
  type: REQUEST_SUCCEDED,
});

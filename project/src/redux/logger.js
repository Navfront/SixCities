/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */

export const logger = (store) => (next) => (action) => {
  console.log('dispatching', action);
  console.log('before', store.getState());
  const result = next(action);
  console.log('after', store.getState());
  return result;
};

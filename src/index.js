import isPlainObject from 'lodash.isplainobject';

export function isFSA(action) {
  return isPlainObject(action) && typeof action.type !== 'undefined';
}

export function isSuccess(action) {
  return (
    isFSA(action) &&
    (typeof action.status === 'undefined' || action.status === 'success')
  );
}

export function isError(action) {
  return (
    isFSA(action) &&
    action.status === 'error'
  );
}

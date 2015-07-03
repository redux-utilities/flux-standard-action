import isPlainObject from 'lodash.isplainobject';

const validKeys = [
  'type',
  'payload',
  'error',
  'meta'
];

function isValidKey(key) {
  return validKeys.indexOf(key) > -1;
}

export function isFSA(action) {
  return (
    isPlainObject(action) &&
    typeof action.type !== 'undefined' &&
    Object.keys(action).every(isValidKey)
  );
}

export function isError(action) {
  return action.error === true;
}

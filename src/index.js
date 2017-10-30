import {
  isPlainObject,
  isString,
} from 'lodash';

export function isFSA(action) {
  return (
    isPlainObject(action) &&
    isString(action.type) &&
    Object.keys(action).every(isValidKey)
  );
}

export function isError(action) {
  return action.error === true;
}

function isValidKey(key) {
  return [
    'type',
    'payload',
    'error',
    'meta',
  ].indexOf(key) > -1;
}

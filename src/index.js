import isPlainObject from 'lodash.isplainobject';

export function isFSA(action) {
  return isPlainObject(action) && typeof action.type !== 'undefined';
}

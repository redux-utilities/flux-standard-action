const validKeys = [
  'type',
  'payload',
  'error',
  'meta'
];

function isValidKey(key) {
  return validKeys.indexOf(key) > -1;
}

export function isPlainObject(value) {
  const isObjectLike = !!value && typeof value === 'object';
  const objectTagMatches = Object.prototype.toString.call(value) === '[object Object]';

  if (!isObjectLike || !objectTagMatches) {
    return false;
  }

  let proto = Object.prototype;
  if (typeof value.constructor === 'function') {
    proto = Object.getPrototypeOf(value);
  }
  if (proto === null) {
    return true;
  }

  const isFunction = typeof proto.constructor === 'function';
  const isInstanceOfSelf = proto.constructor instanceof proto.constructor;
  const constructorTagMatches = Function.prototype.toString.call(proto.constructor) === Function.prototype.toString.call(Object);
  return (isFunction && isInstanceOfSelf && constructorTagMatches);
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

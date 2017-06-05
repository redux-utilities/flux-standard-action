import { isFSA } from '../src/';

const type = 'ACTION_TYPE';
const symbolType = Symbol.for(type);

describe('isFSA()', () => {
  it('requires a type', () => {
    expect(isFSA({ type })).toBe(true);
    expect(isFSA()).toBe(false);
    expect(isFSA({})).toBe(false);
    expect(isFSA({ type: undefined })).toBe(false);
  });

  it('only accepts plain objects', () => {
    const action = () => {};
    action.type = type;
    expect(isFSA(action)).toBe(false);
  });

  it('only returns true if type is a string or symbol', () => {
    // remove this assertion if/when symbol support is dropped
    expect(isFSA({ type: symbolType })).toBe(true);
    expect(isFSA({ type: true })).toBe(false);
    expect(isFSA({ type: 123 })).toBe(false);
  });

  it('returns false if there are invalid keys', () => {
    expect(isFSA({ type, payload: 'foobar' })).toBe(true);
    expect(isFSA({ type, meta: 'foobar' })).toBe(true);
    expect(isFSA({ type, error: new Error() })).toBe(true);
    expect(isFSA({ type, extra: 'foobar' })).toBe(false);
  });
});

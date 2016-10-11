import { expect } from 'chai';
import { isFSA } from '../src/';

const type = 'ACTION_TYPE';
const symbolType = Symbol.for(type);

describe('isFSA()', () => {
  it('requires a type', () => {
    expect(isFSA({ type })).to.be.true;
    expect(isFSA()).to.be.false;
    expect(isFSA({})).to.be.false;
    expect(isFSA({ type: undefined })).to.be.false;
  });

  it('only accepts plain objects', () => {
    const action = () => {};
    action.type = type;
    expect(isFSA(action)).to.be.false;
  });

  it('only returns true if type is a string or symbol', () => {
    // remove this assertion if/when symbol support is dropped
    expect(isFSA({ type: symbolType })).to.be.true;
    expect(isFSA({ type: true })).to.be.false;
    expect(isFSA({ type: 123 })).to.be.false;
  });

  it('returns false if there are invalid keys', () => {
    expect(isFSA({ type, payload: 'foobar' })).to.be.true;
    expect(isFSA({ type, meta: 'foobar' })).to.be.true;
    expect(isFSA({ type, error: new Error() })).to.be.true;
    expect(isFSA({ type, extra: 'foobar' })).to.be.false;
  });
});

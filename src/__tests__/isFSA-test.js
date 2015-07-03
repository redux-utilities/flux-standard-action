import { isFSA } from '../';

const type = 'ACTION_TYPE';

describe('isFSA()', () => {
  it('requires a type', () => {
    expect(isFSA({ type })).to.be.true;
  });

  it('only accepts plain objects', () => {
    const action = () => {};
    action.type = type;
    expect(isFSA(action)).to.be.false;
  });

  it('returns false if there are invalid keys', () => {
    expect(isFSA({ type, payload: 'foobar' })).to.be.true;
    expect(isFSA({ type, meta: 'foobar' })).to.be.true;
    expect(isFSA({ type, error: new Error() })).to.be.true;
    expect(isFSA({ type, extra: 'foobar' })).to.be.false;
  });
});

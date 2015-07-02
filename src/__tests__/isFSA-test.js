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
});

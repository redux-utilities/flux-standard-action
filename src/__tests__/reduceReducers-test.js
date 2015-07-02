import { isFSA } from '../';

describe('isFSA()', () => {
  it('requires a type', () => {
    expect(isFSA({ type: 'ACTION_TYPE' })).to.be.true;
  });

  it('only accepts plain objects', () => {
    const action = () => {};
    action.type = 'ACTION_TYPE';
    expect(isFSA(action)).to.be.false;
  });
});

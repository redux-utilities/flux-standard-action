import { isError } from '../';

const type = 'ACTION_TYPE';

describe('isError()', () => {
  it('returns true if action.error is strictly true', () => {
    expect(isError({ type, error: true })).to.be.true;
    expect(isError({ type, error: 'true' })).to.be.false;
    expect(isError({ type })).to.be.false;
  });
});

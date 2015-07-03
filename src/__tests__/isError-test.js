import { isError } from '../';

const type = 'ACTION_TYPE';

describe('isError', () => {
  it('returns true if status is "error"', () => {
    expect(isError({ type, status: 'error' })).to.be.true;
    expect(isError({ type, status: 'success' })).to.be.false;
  });

  it('returns false if status is not "error"', () => {
    expect(isError({ type })).to.be.false;
    expect(isError({ type, status: 'pending' })).to.be.false;
  });
});
